export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_ERROR = "LOGIN_USER_ERROR";

export const LOGOUT_USER = "LOGOUT_USER";
export const LOGOUT_USER_SUCCESS = "LOGOUT_USER_SUCCESS";
export const LOGOUT_USER_ERROR = "LOGOUT_USER_ERROR";

export const loginUserAction = user => {
  return {
    type: LOGIN_USER,
    user
  };
};

export const logoutUserAction = user => {
  return {
    type: LOGOUT_USER,
    user
  };
};

let INITIAL_STATE = {
  login: false,
  token: null,
  refreshToken: null,
  userData: {
    id: null,
    username: null,
    email: null,
    phone: null,
    profile_picture_url: null,
    phone_verification_id: null
  }
};

const login = (state = INITIAL_STATE, action) => {
  const response = action.response;

  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        login: true,
        token: response.data.access_token,
        refreshToken: response.data.refresh_token,
        userData: {
          id: response.data.user_id,
          username: null,
          email: null,
          phone: null,
          profile_picture_url: "",
          phone_verification_id: null
        },
        response
      };
    case LOGIN_USER_ERROR:
      return { ...state, response };
    case LOGOUT_USER_SUCCESS:
      return {
        ...state,
        login: INITIAL_STATE.login,
        token: INITIAL_STATE.token,
        refreshToken: INITIAL_STATE.refreshToken,
        userData: {
          id: INITIAL_STATE.id,
          username: INITIAL_STATE.username,
          email: INITIAL_STATE.email,
          phone: INITIAL_STATE.phone,
          profile_picture_url: INITIAL_STATE.profile_picture_url,
          phone_verification_id: INITIAL_STATE.phone_verification_id
        },
        response
      };
    case LOGOUT_USER_ERROR:
      return { ...state, response };
    default:
      return state;
  }
};
export default login;
