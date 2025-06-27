import React from "react";
import { logout } from "./slices/UsuarioSlice";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const Titulo = styled.h1`
  text-align: center;
`;

export default function LoggedScreen() {
  const dispatch = useDispatch();

  return (
    <div>
      <Titulo>LoggedScreen</Titulo>
      <button onClick={()=>dispatch(logout())}>Cerrar sesion</button>
    </div>
  );
}
