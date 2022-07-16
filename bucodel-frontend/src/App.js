import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from './views/Login';
import { PasswordReset } from './views/PasswordReset';


export const App = () => {
  return (
      <BrowserRouter>
      <Routes>
          <Route index element={<Login/>} path="/"/>
          <Route index element={<PasswordReset/>} path="passwordreset"/>
      </Routes>
      </BrowserRouter>
  )
}
