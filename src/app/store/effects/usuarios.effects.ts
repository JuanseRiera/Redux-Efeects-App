import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { catchError, map, switchMap } from "rxjs/operators";
import { of } from "rxjs";
import * as usuariosActions from '../actions';
import { UsuarioService } from '../../services/usuario.service';

@Injectable()
export class usuariosEffects{

    constructor(private actions$:Actions,private usuariosServices:UsuarioService){}

    @Effect()
    cargarUsuarios$ = this.actions$.pipe(ofType(usuariosActions.CARGAR_USUARIOS)).pipe(
        switchMap(()=>{
            return this.usuariosServices.getUsers().pipe(map(users=>
                new usuariosActions.CargarUsuariosSuccess(users)),
                catchError(error=> of(new usuariosActions.CargarUsuariosFail(error)))
            );
        })
    )
}