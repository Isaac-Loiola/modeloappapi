import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendas } from 'src/app/services/vendas';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.page.html',
  styleUrls: ['./usuario-list.page.scss'],
  standalone: false
})
export class UsuarioListPage implements OnInit {
  usuarios: any[] = [];
  
  constructor(
    private api: Vendas,
    private router: Router
  ) { }

  ngOnInit() {
    this.listar();
  }

  // used for update data with API
  ionViewWillEnter(){
    this.listar();
    console.log(this.usuarios);
  }
  
  listar(id:number=0){
     this.api.operacao({requisicao: 'usuario-listar'}).subscribe(
      (res:any)=>{
      if(res.success){
        this.usuarios = res.data;
      }
      console.log(res.msg)
    });
  }

  editar(id:number){
    this.router.navigate(['/usuario-edit', id])
  }
}
