export const studentLoginStart = (studentCredentials) => ({
  type: "LOGIN_START",
});

export const studentLoginSuccess = (student) => ({
  type: "LOGIN_SUCCESS",
  payload: student,
});

export const studentLoginFailure = () => ({
  type: "LOGIN_FAILURE",
});

export const studentLogout = () => ({
  type: "LOGOUT",
});

export const lecturerLoginStart = (lecturerCredentials) => ({
  type: "LOGIN_START",
});

export const lecturerLoginSuccess = (lecturer) => ({
  type: "LOGIN_SUCCESS",
  payload: lecturer,
});

export const lecturerLoginFailure = () => ({
  type: "LOGIN_FAILURE",
});

export const lecturerLogout = () => ({
  type: "LOGOUT",
});

export const adminLoginStart = (adminCredentials) => ({
  type: "LOGIN_START",
});

export const adminLoginSuccess = (admin) => ({
  type: "LOGIN_SUCCESS",
  payload: admin,
});

export const adminLoginFailure = () => ({
  type: "LOGIN_FAILURE",
});

export const adminLogout = () => ({
  type: "LOGOUT",
});
