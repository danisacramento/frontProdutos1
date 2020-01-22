import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { UsuarioService } from '../servicos/usuario.service';
import { Token } from '../model/Token';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();
  constructor(private servico:UsuarioService, private router: Router) { }

  ngOnInit() {
  }

  enviarDados(){
    /* aqui temos que enviar o objeto usuario que foi preenchido automaticamente nos campos do 
    formulario e aguardar as possíveis respostas - Token (crachá de autorizaãço) ou o status 403
    */
   this.servico.logar(this.usuario).subscribe(
     (res: Token)=>{
       alert("Sucesso! Autorizado");
       //alert("Seu token = "+res.strToken);
       localStorage.setItem("daniToken",res.strToken);
       this.router.navigate(['/listagem']);
     },
     (err)=>{
        alert("Erro - usuario nao autorizado!");
     }
   );
   
  }
}
