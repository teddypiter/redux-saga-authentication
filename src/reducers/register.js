export const REGISTER_USER = "REGISTER_USER";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_ERROR = "REGISTER_USER_ERROR";

export const registerUserAction = user => {
  return {
    type: REGISTER_USER,
    user
  };
};

let INITIAL_STATE = {
  status: "",
  userData: {
    email: null,
    password: null,
    username: null,
    phone: null
  }
};

const register = (state = INITIAL_STATE, action) => {
  const response = action.response;

  switch (action.type) {
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        status: "success",
        userData: {
          username: null,
          email: null,
          phone: null,
          password: null
        },
        response
      };
    case REGISTER_USER_ERROR:
      return { ...state, response };
    default:
      return state;
  }
};
export default register;
