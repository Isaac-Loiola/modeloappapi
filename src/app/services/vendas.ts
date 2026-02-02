import { HttpClient } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root',
})
export class Vendas {
  private url = "http://10.91.47.129/modelo-api";

  constructor(private http: HttpClient){}
  // saída para o primeiro endpoint
  operacao(dados:any){
    return this.http.post(this.url + '/api.php', dados);
 }
  
}
