import { HttpClient } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root',
})
export class Vendas {
  private url = "https://sublimegrace.com.br/modelo-api";

  constructor(
    private http: HttpClient
  ){}
  // saída para o primeiro endpoint
  operacao(dados:any){
    return this.http.post(this.url + '/api.php', dados);
 }

  //  Upload de iamgem
  uploadImagem(idProduto:number, arquivo:File){
    const formData = new FormData();
    formData.append('requisicao', 'produto-upload-imagem');
    formData.append('id_produto', idProduto.toString());
    formData.append('imagem', arquivo);
    
    return this.http.post(this.url + '/api.php', formData);

  }
  
}
