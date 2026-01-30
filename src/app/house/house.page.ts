import { Component, OnInit } from '@angular/core';
import { Vendas } from '../services/vendas';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-house',
  templateUrl: './house.page.html',
  styleUrls: ['./house.page.scss'],
  standalone: false
})
export class HousePage implements OnInit {

  constructor(private api: Vendas) { }

  async Listar(){
      // listar peidos
      const pedidosLista = {
        requicisao: 'pedido-listar',
        id_pedido: 10053
      }
      console.log(pedidosLista);
  
      const resposta : any = await lastValueFrom(this.api.operacao(pedidosLista));
      const pedidos = resposta.data;
  
      console.log(pedidos);
  }

  ngOnInit() {
  }

}
