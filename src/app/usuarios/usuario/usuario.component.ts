import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';
import * as usuarioActions from '../../store/actions'
import { Usuario } from '../../models/usuario.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit,OnDestroy {

  user:Usuario;
  subscription:Subscription=new Subscription();
  loading:boolean=false;
  error:any;

  constructor(private router:ActivatedRoute,private store:Store<AppState>) { }

  ngOnInit(): void {

    this.router.params.subscribe(params=>{
      let id=params['id'];
      this.store.dispatch(new usuarioActions.CargarUsuario(id));      
    });

    this.subscription=this.store.select('usuario').subscribe(resp=>{
      this.user=resp.user;
      this.loading=resp.loading;
      this.error=resp.error;
    })
  }

  ngOnDestroy(){
  this.subscription.unsubscribe();
  }

}
