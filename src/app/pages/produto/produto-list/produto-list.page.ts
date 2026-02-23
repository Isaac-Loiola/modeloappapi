import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendas } from 'src/app/services/vendas';
import { addIcons } from 'ionicons';
import { timeout } from 'rxjs';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.page.html',
  styleUrls: ['./produto-list.page.scss'],
  standalone: false
})
export class ProdutoListPage implements OnInit {
  
  produtos: any[] =[];
  start:number = 0; // controla o inicio da busca
  limit: number = 20; //  quantidade de item por página 
  palavra: any;
  
  constructor(
    private api: Vendas, 
    private router:Router
  ) {}

  ngOnInit() {
  }
  
  ionViewWillEnter(){
    this.listar();
  }

  listar(event?:any, atualizar:boolean=false){
    // se for um refresh ( a gente reseta o contador e a lista)
    if(atualizar){
      this.start = 0;
      this.produtos = [];
    }
    // AQui a gente padssa a quantidade de linhas que queremos exibir e 

    this.api.operacao({
      requisicao: 'produto-listar',
      limit: this.limit,
      start: this.start,
      nome: this.palavra
    }).subscribe((res:any) => {
      if(res.success){
        // aqui a gente acresenta os novos items aos existentes
        this.produtos = [...this.produtos, ...res.data];

        // incrementar o start para o proximo carregamento
        this.start += this.limit; // lembre-se: start inicia com zero e aqui passa a valer 20, 40, 60, 80, 100, 120...
      }
      // finaliza a animação do componente que disparou o evento
      event.target.complete();

      // Desativar o infinite scroll se não houver mais dados
      if(res.data.length < this.limit && event?.target?.disabled !== undefined){
        event.target.disabled = true;
      }
    });
  }

  // puxar para atualizar (reseta a list)
  atualizar(event:any){
    this.listar(event, true);
  }

  // Scroll infinito ( carregar mais... )
  carregar(event:any){
    this.listar(event)
  }

  abrirDetalhes(id:number){
    this.router.navigate(['/produto-detalhe', id]);
  }
  
    abrirImagem(id:number){
    this.router.navigate(['/produto-imagem', id]);
  }

  // Função disparada pelo searchbar
  buscar(event:any){
    this.palavra = event.target.value.toLowerCase();
    this.listar(null, true);
  }
}
