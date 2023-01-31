export const studentReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        student: null,
        isFetching: true,
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        student: action.payload,
        isFetching: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        student: null,
        isFetching: false,
        error: true,
      };
    case "LOGOUT":
      return {
        student: null,
        isFetching: false,
        error: false,
      };
    default:
      return state;
  }
};

export const lecturerReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        lecture: null,
        isFetching: true,
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        lecturer: action.payload,
        isFetching: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        lecturer: null,
        isFetching: false,
        error: true,
      };
    case "LOGOUT":
      return {
        lecturer: null,
        isFetching: false,
        error: false,
      };
    default:
      return state;
  }
};

export const adminReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        admin: null,
        isFetching: true,
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        admin: action.payload,
        isFetching: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        admin: null,
        isFetching: false,
        error: true,
      };
    case "LOGOUT":
      return {
        admin: null,
        isFetching: false,
        error: false,
      };
    default:
      return state;
  }
};
