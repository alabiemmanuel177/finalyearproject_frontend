import React from "react";
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

const theme = createTheme({
  palette: {
    primary: {
      main: "#0a3697",
    },
  },
});

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          "Student"
          <Route index element={<LandingPage />} path="/" />
          <Route element={<Login />} path="/login" />
          <Route element={<PasswordReset />} path="/passwordreset" />
          <Route element={<Meeting />} path="/meeting" />
          <Route element={<Classroom />}>
            <Route element={<Dashboard />} path="/dashboard" />
            <Route element={<Courses />} path="/courses" />
            <Route element={<Assignment />} path="/assignment" />
            <Route element={<DoAssignment />} path="/doassignment" />
            <Route element={<Settings />} path="/settings" />
            <Route element={<Classes />} path="/class" />
          </Route>
          "Lecturer"
          <Route element={<LecturerLogin />} path="/lecturerlogin" />
          <Route element={<LecturerPasswordReset />} path="/lecturerreset" />
          <Route element={<LecturerClassroom />}>
            <Route element={<LecturerDashboard />} path="/lecturerdashboard" />
            <Route element={<Courses />} path="/lecturercourses" />
            <Route
              element={<LecturerAssignments />}
              path="/lecturerassignment"
            />
            <Route element={<LecturerDoassignment />} path="/lecturerdoassignment" />
            <Route element={<Settings />} path="/lecturersettings" />
            <Route element={<Classes />} path="/lecturerclass" />
          </Route>
          "Admin"
          <Route element={<AdminLogin />} path="/adminlogin" />
          <Route element={<AdminPage />} path="/adminpage" />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
