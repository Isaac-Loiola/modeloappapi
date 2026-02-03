import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupName, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Vendas } from 'src/app/services/vendas';

@Component({
  selector: 'app-cliente-add',
  templateUrl: './cliente-add.page.html',
  styleUrls: ['./cliente-add.page.scss'],
  standalone: false
})
export class ClienteAddPage implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private api: Vendas,
    private toast: ToastController
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', Validators.required],
      datanasc: ['', Validators.required]
    });
  }

  salvar(){
    const request = {
      requisicao: 'cliente-add',
      ...this.form.value
    }

    this.api.operacao(request).subscribe((res:any) =>{
      if(res.success){
        this.form.reset();
      }
      this.menssagem(res.smg);

    });
  }

  async menssagem(msg: string){
    const t = await this.toast.create({
      duration: 1500,
      message: msg
    });
    t.present();
  } 

}
