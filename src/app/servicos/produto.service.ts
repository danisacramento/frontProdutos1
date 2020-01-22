import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  recuperaListaDeProdutos(){
    let tk = localStorage.getItem("daniToken");
    return this.http.get("http://localhost:8080/produtos?token="+tk);
  }
}
