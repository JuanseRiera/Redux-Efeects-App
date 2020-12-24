import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {

  usuarios:Array<Usuario>=[];

  constructor(public UsuarioService:UsuarioService) { }

  ngOnInit(): void {

    this.UsuarioService.getUsers().subscribe(resp=>{
      this.usuarios=resp;
    })
  }

}
