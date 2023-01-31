import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Classroom from "./views/Student/Classroom/Classroom";
import { Login } from "./views/Student/Login";
import { PasswordReset } from "./views/Student/PasswordReset";
import Dashboard from "./views/Student/Classroom/Dashboard";
import Courses from "./views/Student/Classroom/Courses";
import Assignment from "./views/Student/Classroom/Assignment";
import Settings from "./views/Student/Classroom/Settings";
import Classes from "./views/Student/Classroom/Classes";
import Meeting from "./views/Student/Meeting";
import DoAssignment from "./views/Student/DoAssignment";
import LecturerPasswordReset from "./views/Lecturer/LecturerPasswordReset";
import LecturerLogin from "./views/Lecturer/LecturerLogin";
import AdminLogin from "./views/Admin/AdminLogin";
import AdminPage from "./views/Admin/AdminPage";
import LecturerClassroom from "./views/Lecturer/Classroom/LecturerClassroom";
import LecturerDashboard from "./views/Lecturer/Classroom/LecturerDashboard";
import LecturerAssignments from "./views/Lecturer/Classroom/LecturerAssignments";
import LecturerDoassignment from "./views/Lecturer/LecturerDoassignment";
import LandingPage from "./views/LandingPage";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LecturerCourses from "./views/Lecturer/Classroom/LecturerCourses";
import LecturerClasses from "./views/Lecturer/Classroom/LecturerClasses";
import { useContext } from "react";
import {
  studentContext,
  lecturerContext,
  adminContext,
} from "./context/Context";

import {
  StudentContextProvider,
  AdminContextProvider,
  LecturerContextProvider,
} from "./context/Context";
import axios from "axios";
import config from "./config";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0a3697",
    },
  },
});

export const App = () => {
  const { student } = useContext(studentContext);
  const { lecturer } = useContext(lecturerContext);
  const { admin } = useContext(adminContext);

  

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <StudentContextProvider>
          <Routes>
            <Route index element={<LandingPage />} path="/" />
            "Student"
            <Route element={<Login />} path="/login" />
            <Route element={<PasswordReset />} path="/passwordreset" />
            <Route
              element={student ? <Meeting student={student} /> : <Login />}
              path="/meeting"
            />
            <Route
              element={student ? <Classroom student={student} /> : <Login />}
            >
              <Route
                element={<Dashboard student={student} />}
                path="/dashboard"
              />
              <Route element={<Courses student={student} />} path="/courses" />
              <Route
                element={<Assignment student={student} />}
                path="/assignment"
              />
              <Route
                element={<DoAssignment student={student} />}
                path="/doassignment"
              />
              <Route
                element={<Settings student={student} />}
                path="/settings"
              />
              <Route element={<Classes student={student} />} path="/class" />
            </Route>
          </Routes>
        </StudentContextProvider>
        <LecturerContextProvider>
          <Routes>
            "Lecturer"
            <Route element={<LecturerLogin />} path="/lecturerlogin" />
            <Route element={<LecturerPasswordReset />} path="/lecturerreset" />
            <Route
              element={
                lecturer ? (
                  <LecturerClassroom lecturer={lecturer} />
                ) : (
                  <LecturerLogin />
                )
              }
            >
              <Route
                element={<LecturerDashboard />}
                path="/lecturerdashboard"
              />
              <Route element={<LecturerCourses />} path="/lecturercourses" />
              <Route
                element={<LecturerAssignments />}
                path="/lecturerassignment"
              />
              <Route
                element={<LecturerDoassignment />}
                path="/lecturerdoassignment"
              />
              <Route element={<Settings />} path="/lecturersettings" />
              <Route element={<LecturerClasses />} path="/lecturerclass" />
            </Route>
          </Routes>
        </LecturerContextProvider>
        <AdminContextProvider>
          <Routes>
            "Admin"
            <Route element={<AdminLogin />} path="/adminlogin" />
            <Route element={<AdminPage />} path="/adminpage" />
          </Routes>
        </AdminContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};
