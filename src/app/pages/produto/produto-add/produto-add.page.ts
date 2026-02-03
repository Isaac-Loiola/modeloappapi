import { Component, createNgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Vendas } from 'src/app/services/vendas';

@Component({
  selector: 'app-produto-add',
  templateUrl: './produto-add.page.html',
  styleUrls: ['./produto-add.page.scss'],
})
export class ProdutoAddPage implements OnInit {
  // A formGroup must have a formBuilder
  // In constructor must have object for API
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private api: Vendas,
    private toast: ToastController
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      codigoBarras: ['', Validators.required],
      desricao: ['', Validators.required],
      valorUnit: ['', Validators.required],
      unidadeVenda: ['', Validators.required],
      idCategoria: ['', Validators.required],
      estoqueMin: ['', Validators.required],
      classeDesconto: ['', Validators.required]
    });
  }

  // in the method salvar, must have a variable with request body 
  salvar(){
    const request = {
      requisicao: 'produto-add',
      ...this.form.value
    }
    this.api.operacao(request).subscribe((res:any)=> {
      this.mensagem(res.msg);
      if(res.success){
        this.form.reset();
      }
      else{

      }
    });
  }

  async mensagem(msg:string){
    const t = await this.toast.create({
      duration: 1500,
      message: msg,
    });
    t.present();
  }

}
