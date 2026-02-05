import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Auth } from 'src/app/services/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: Auth,
    private router: Router,
    private toast: ToastController
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', Validators.required, Validators.email],
      senha: ['', Validators.required]
    });
  }

  
  entrar(){
    const {email, senha} = this.form.value;
    this.auth.login(email, senha).subscribe((res:any) =>{
      if(res.success){
        this.auth.setUsuario(res.result);
        this.router.navigateByUrl('/home', {replaceUrl: true});
      }
      else{
        this.mensagem(res.msg || 'Falha no login');
      }
    });
  }

  async mensagem(msg: string){
    const t = await this.toast.create({
      message: msg,
      duration: 1500
    });
    t.present();
  }

}
