import { createSlice } from "@reduxjs/toolkit";

export const usuarioSlice = createSlice({
  name: "usuario",
  initialState: { nombre: "", email: "", password: "" },
  reducers: {
    login: (state, action) => {
      //   State es el estado original
      // Payload es un objeto que viene con el tipo de accion a realizar y el nuevo estado
      state.nombre = action.payload.nombre;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    logout: (state) => {
      state.nombre = "";
      state.email = "";
      state.password = "";
    },
  },
});

export const { login, logout } = usuarioSlice.actions;
export default usuarioSlice.reducer;
