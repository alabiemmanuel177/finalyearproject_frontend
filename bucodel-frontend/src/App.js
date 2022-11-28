import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Classroom from "./views/Classroom";
import { Login } from "./views/Login";
import { PasswordReset } from "./views/PasswordReset";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Classroom />} path="/" />
        <Route element={<Login />} path="login" />
        <Route element={<PasswordReset />} path="passwordreset" />
      </Routes>
    </BrowserRouter>
  );
};
