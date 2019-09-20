import { put, call } from "redux-saga/effects";
import * as types from "../reducers/login";

export function* loginSaga(payload) {
  try {
    const response = yield call(loginUserService, payload);
    yield put({ type: types.LOGIN_USER_SUCCESS, response });
  } catch (error) {
    yield put({ type: types.LOGIN_USER_ERROR, error });
  }
}

export function* logoutSaga(payload) {
  try {
    const response = yield call(logoutUserService, payload);
    yield put({ type: types.LOGOUT_USER_SUCCESS, response });
  } catch (error) {
    yield put({ type: types.LOGOUT_USER_ERROR, error });
  }
}

function* loginUserService(request) {
  const LOGIN_API_ENDPOINT = "http://192.168.2.46:8090/v1/auth/login";
  const parameters = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(request.user)
  };

  try {
    const response = yield call(fetch, LOGIN_API_ENDPOINT, parameters);
    const responseJson = yield call([response, response.json]);
    console.log("RESPONSE", responseJson);
    return responseJson;
  } catch (ex) {
    console.log("Exception", ex.response);
    throw ex;
  }
}

function* logoutUserService(request) {
  console.log(request);
  const LOGOUT_API_ENDPOINT = "http://192.168.2.46:8090/v1/auth/logout";
  const parameters = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + request.user.access_token
    },
    body: JSON.stringify(request.user)
  };

  try {
    const response = yield call(fetch, LOGOUT_API_ENDPOINT, parameters);
    const responseJson = yield call([response, response.json]);
    console.log("RESPONSE", responseJson);
    return responseJson;
  } catch (ex) {
    console.log("Exception", ex.response);
    throw ex;
  }
}
