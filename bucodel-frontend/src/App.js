import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Classroom from "./views/Classroom";
import { Login } from "./views/Login";
import { PasswordReset } from "./views/PasswordReset";
import Dashboard from "./views/Classroom/Dashboard";
import Courses from "./views/Classroom/Courses";
import Assignment from "./views/Classroom/Assignment";
import Settings from "./views/Classroom/Settings";
import Classes from "./views/Classroom/Classes";
import Meeting from "./views/Meeting";
import DoAssignment from "./views/DoAssignment";
import LecturerPasswordReset from "./views/Lecturer/LecturerPasswordReset";
import LecturerLogin from "./views/Lecturer/LecturerLogin";
import AdminLogin from "./views/Admin/AdminLogin";
import AdminPage from "./views/Admin/AdminPage";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} path="/login" />
        <Route element={<PasswordReset />} path="/passwordreset" />
        <Route element={<Classroom />}>
          <Route element={<Dashboard />} path="/" />
          <Route element={<Courses />} path="/courses" />
          <Route element={<Assignment />} path="/assignment" />
          <Route element={<DoAssignment />} path="/doassignment" />
          <Route element={<Settings />} path="/settings" />
          <Route element={<Classes />} path="/class" />
        </Route>
        <Route element={<Meeting />} path="/meeting" />
        <Route element={<LecturerLogin />} path="/lecturerlogin" />
        <Route element={<LecturerPasswordReset />} path="/lecturerreset" />
        <Route element={<AdminLogin />} path="/adminlogin" />
        <Route element={<AdminPage />} path="/adminpage" />
      </Routes>
    </BrowserRouter>
  );
};
