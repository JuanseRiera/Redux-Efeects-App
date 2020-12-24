import { ActionReducerMap } from "@ngrx/store";
import * as reducers from './reducers';

export interface AppState {
    usuarios:reducers.usuariosState;
    usuario:reducers.usuarioState
}

export const appReducers: ActionReducerMap<AppState>={
    usuario: reducers.usuarioReducer,
    usuarios: reducers.usuariosReducer
}