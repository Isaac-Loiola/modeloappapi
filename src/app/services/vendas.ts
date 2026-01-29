import { HttpClient } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Vendas {
  private url = "http://10.91.47.128/modelo.api";

  constructor(private http: HttpClient){}
  // saída para o primeiro endpoin
  operacao(dados:any){
    return this.http.post(this.url + '/api.php', dados);
    // return this.http.post(this.url, dados);
  }

  listarProdutos(dados:any){
    return this.http.get(this.url + '/api-produto.php', dados);
  }

  
}
