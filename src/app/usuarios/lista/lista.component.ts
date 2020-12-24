import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Usuario } from 'src/app/models/usuario.model';
import { AppState } from 'src/app/store/app.reducers';
import * as usuariosActions from '../../store/actions'

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit,OnDestroy {

  usuarios:Array<Usuario>=[];
  subscription:Subscription=new Subscription();
  loading:boolean=false;
  error:any;

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(new usuariosActions.CargarUsuarios());

   this.subscription=this.store.select('usuarios').subscribe(resp=>{
      this.usuarios=resp.users;
      this.loading=resp.loading;
      this.error=resp.error;
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
