import { Usuario } from "src/app/models/usuario.model";
import * as fromUsarios from "../actions";

export interface usuariosState {
  users: Array<Usuario>;
  loaded: boolean;
  loading: boolean;
  error: any;
}

const estadoInicial: usuariosState = {
  users: [],
  loaded: false,
  loading: false,
  error: null,
};

export function usuariosReducer(
  state = estadoInicial,
  action: fromUsarios.usuariosActions
): usuariosState {
  switch (action.type) {
    case fromUsarios.CARGAR_USUARIOS:
      return {
        ...state,
        loading: true,
        error:null
      };

    case fromUsarios.CARGAR_USUARIOS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded:true,
        users: [...action.payload]
      };

    case fromUsarios.CARGAR_USUARIOS_FAIL:
      return {
        ...state,
        loading: false,
        loaded:false,
    error: {
        status:action.payload.status,
        message:action.payload.message,
        url:action.payload.url,

    }
      };

    default:
      return state;
  }
}
