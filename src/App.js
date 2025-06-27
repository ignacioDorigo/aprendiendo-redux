import React from "react";
import { useSelector } from "react-redux";
import LoggedScreen from "./LoggedScreen";
import GuestScreen from "./GuestScreen";

export default function App() {
  const usuario = useSelector((state) => state.usuario);

  if (usuario.email === "") {
    return <GuestScreen></GuestScreen>;
  } else {
    return <LoggedScreen></LoggedScreen>;
  }
}
