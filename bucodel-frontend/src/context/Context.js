import { createContext, useReducer } from "react";
import { studentReducer } from "./Reducer";
import { lecturerReducer } from "./Reducer";
import { adminReducer } from "./Reducer";
import { useEffect } from "react";

const studentINITIAL_STATE = {
  student: JSON.parse(localStorage.getItem("student")) || null,
  isFetching: false,
  error: false,
};

const adminINITIAL_STATE = {
  admin: JSON.parse(localStorage.getItem("admin")) || null,
  isFetching: false,
  error: false,
};

const lecturerINITIAL_STATE = {
  lecturer: JSON.parse(localStorage.getItem("lecturer")) || null,
  isFetching: false,
  error: false,
};

export const studentContext = createContext(studentINITIAL_STATE);
export const lecturerContext = createContext(lecturerINITIAL_STATE);
export const adminContext = createContext(adminINITIAL_STATE);

export const StudentContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(studentReducer, studentINITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("student", JSON.stringify(state.student));
  }, [state.student]);
  return (
    <studentContext.Provider
      value={{
        student: state.student,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </studentContext.Provider>
  );
};
export const AdminContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(adminReducer, adminINITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("admin", JSON.stringify(state.admin));
  }, [state.admin]);
  return (
    <adminContext.Provider
      value={{
        admin: state.admin,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </adminContext.Provider>
  );
};

export const LecturerContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(lecturerReducer, lecturerINITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("lecturer", JSON.stringify(state.lecturer));
  }, [state.lecturer]);
  return (
    <lecturerContext.Provider
      value={{
        lecturer: state.lecturer,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </lecturerContext.Provider>
  );
};
