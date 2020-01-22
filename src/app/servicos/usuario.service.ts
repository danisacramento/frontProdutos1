import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  // vamos criar uma funcionalidade que entra em contato com o back-end

  logar(usuario: Usuario){
     console.log("Estou dentro do servico de logar");
     console.log(usuario);
     return this.http.post("http://localhost:8080/login", usuario);
  }

}
