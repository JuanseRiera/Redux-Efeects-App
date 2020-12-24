import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { catchError, map, switchMap } from "rxjs/operators";
import { of } from "rxjs";
import * as usuarioActions from '../actions';
import { UsuarioService } from '../../services/usuario.service';

@Injectable()
export class usuarioEffects{

    constructor(private actions$:Actions,private usuarioServices:UsuarioService){}

    @Effect()
    cargarUsuario$ = this.actions$.pipe(ofType(usuarioActions.CARGAR_USUARIO)).pipe(
        switchMap((accion: usuarioActions.CargarUsuario)=>{
            console.log(accion);
            
            return this.usuarioServices.getUserById(accion.id).pipe(map(user=>
                new usuarioActions.CargarUsuarioSuccess(user)),
                catchError(error=> of(new usuarioActions.CargarUsuarioFail(error)))
            );
        })
    )
}