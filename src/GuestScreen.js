import React from "react";
import LoginForm from "./components/LoginForm/LoginForm";
import styled from "styled-components";

const Titulo = styled.h1`
  text-align: center;
`;

export default function GuestScreen() {
  return (
    <div>
      <Titulo>USUARIO INVITADO</Titulo>
      <LoginForm />
    </div>
  );
}
