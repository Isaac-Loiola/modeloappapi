import { Component, Version } from '@angular/core';
import { Vendas } from '../services/vendas';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  public pedido: any = null
  mensagem = ''
  constructor(private api : Vendas,) {}

  ngOnInit(){
    console.log('jhown')
  }

  async Listar(){
    // listar peidos
    const pedidosLista = {
      requicisao: 'pedido-listar',
      id_pedido: 10053
    }

    const resposta : any = await lastValueFrom(this.api.operacao(pedidosLista));
    this.mensagem = resposta.msg;
    this.pedido = resposta.data[0];

  }

}
