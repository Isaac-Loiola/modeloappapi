import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastButton, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.page.html',
  styleUrls: ['./cliente-edit.page.scss'],
  standalone: false
})
export class ClienteEditPage implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toast: ToastController
  ) { }

  ngOnInit(){
    this.form = this.fb.group({
      
    });
  }

  

}
