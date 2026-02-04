import { lastValueFrom } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Vendas } from 'src/app/services/vendas';

@Component({
  selector: 'app-usuario-add',
  templateUrl: './usuario-add.page.html',
  styleUrls: ['./usuario-add.page.scss'],
  standalone: false,
})
export class UsuarioAddPage implements OnInit {
  form!: FormGroup;
  niveis: any[] = [];

  constructor(
    private fb: FormBuilder,
    private api: Vendas,
    private toast: ToastController,
  ) { }

  ngOnInit() { // parte do ciclo de vida do app ionic
    this.form = this.fb.group({
      nome: ['', Validators.required],
      email: ['', Validators.email],
      senha: ['', Validators.required],
      id_nivel: ['', Validators.required]
    });
    this.listarNiveis();
  }

  salvar(){
    const request = {
      requisicao: 'usuario-add',
      ...this.form.value
    }
    this.api.operacao(request).subscribe((res:any) => {
      this.mensagem(res.msg); // exibir a mensagem que  retornou da api
      if(res.success){
        this.form.reset();
      }
    });
  }

  async mensagem(msg: string){
    const t = await this.toast.create({
      message: msg,
      duration: 1500,
      // position: 'bottom',
    });
    t.present();
  }

  listarNiveis(){
    this.api.operacao({
      requisicao: "nivel-listar"
    }).subscribe((res:any) => {
      if(res.success){
        this.niveis = res.data;
      }
    });
  }

}