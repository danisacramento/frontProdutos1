import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../servicos/produto.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  lista: Produto[];
  constructor(private servico: ProdutoService) { }

  /*
  entrar em contato com o site, passando o token e receber de volta 2 possíveis coisas:
  1 - a lista de produtos
  2 - um erro
   */
  ngOnInit() {
    this.servico.recuperaListaDeProdutos().subscribe(
      ( res: Produto[] ) => {
        this.lista = res;
      },
      ( err ) => {
         alert("Voce nao tem autorizacao para consultar produtos!");
      }
    );

  }

}
