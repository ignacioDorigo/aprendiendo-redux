import { configureStore } from "@reduxjs/toolkit";
import usuarioReducer from "./slices/UsuarioSlice";

export default configureStore({
  reducer: {
    usuario: usuarioReducer,
  },
});
