import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Vendas } from 'src/app/services/vendas';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.page.html',
  styleUrls: ['./cliente-list.page.scss'],
  standalone: false
})
export class ClienteListPage implements OnInit {
  clientes: any[] = [];

  constructor(
    private api: Vendas,
    private router: Router,
    private toast: ToastController
  ) { }

  ngOnInit(
    
  ) {}

  ionViewWillEnter(){
    this.listar();
  }

  listar(){
    this.api.operacao({
      requisicao: "cliente-listar"
    }).subscribe((res:any)=>{
      if(res.success){
         this.clientes = res.data;
         this.mensagem(res.msg);
      }
      else{
        this.mensagem(res.msg);
      }
    });
  }

  async mensagem(msg: string){
    const t = await this.toast.create({
      message: msg,
      duration: 2000
    }) ;
    t.present();
  }

  editar(id:any){
    this.router.navigate(['/cliente-edit'], id);
  }
}
