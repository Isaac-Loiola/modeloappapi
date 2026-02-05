import { Component, Version } from '@angular/core';
import { Vendas } from '../services/vendas';
import { lastValueFrom } from 'rxjs';
import { ToastButton, ToastController } from '@ionic/angular';
import { ToastSwipeGestureDirection } from '@ionic/core';
import { Auth } from '../services/auth';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor(
    private api : Vendas,
    private toast: ToastController,
    private auth: Auth,
    private router: Router
  ) {}

  ngOnInit(){
    
  }

  // async Listar(){
  //   // listar peidos
  //   const pedidosLista = {
  //     requicisao: 'pedido-listar',
  //     id_pedido: 10053
  //   }

  //   const resposta : any = await lastValueFrom(this.api.operacao(pedidosLista));
  //   this.mensagem = resposta.msg;
  //   this.pedido = resposta.data[0];

  // }

  logout(){
    this.auth.logout();
    this.router.navigateByUrl('/login', {replaceUrl: true});
  }

}
