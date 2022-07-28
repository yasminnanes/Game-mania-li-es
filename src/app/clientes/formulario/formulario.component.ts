import { Component, OnInit } from '@angular/core';
import { Cliente } from '../shared/cliente';
import { FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {

  formCliente!: FormGroup;

  constructor() { }

  ngOnInit() {
    this.createForm(new Cliente());
  }

  createForm(cliente: Cliente) {
    this.formCliente = new FormGroup({
     
      nome: new FormControl (cliente.nome_cad),
      email: new FormControl (cliente.email_cad),
      senha: new FormControl (cliente.senha_cad),
      
    })
  }

  onSubmit() {
    // aqui você pode implementar a logica para fazer seu formulário salvar
    console.log(this.formCliente.value);

    // Usar o método reset para limpar os controles na tela
    this.formCliente.reset(new Cliente());
  }
}
