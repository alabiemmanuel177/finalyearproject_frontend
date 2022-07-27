import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Classroom } from './views/Classroom';
import { Login } from './views/Login';
import { PasswordReset } from './views/PasswordReset';



export const App = () => {
  return (
      <BrowserRouter>
      <Routes>
          <Route index element={<Login/>} path="/"/>
          <Route element={<PasswordReset/>} path="passwordreset"/>
          <Route index element={<Classroom/>} path="classroom"/>
      </Routes>
      </BrowserRouter>
  )
}
