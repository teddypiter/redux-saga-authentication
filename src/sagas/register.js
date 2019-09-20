import { put, call } from "redux-saga/effects";
import * as types from "../reducers/register";

export function* registerSaga(payload) {
  try {
    const response = yield call(registerUserService, payload);
    yield put({ type: types.REGISTER_USER_SUCCESS, response });
  } catch (error) {
    yield put({ type: types.REGISTER_USER_ERROR, error });
  }
}

function* registerUserService(request) {
  const REGISTER_API_ENDPOINT = "http://192.168.2.46:8090/v1/auth/register";
  const parameters = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(request.user)
  };

  try {
    const response = yield call(fetch, REGISTER_API_ENDPOINT, parameters);
    const responseJson = yield call([response, response.json]);
    console.log("RESPONSE", responseJson);
    return responseJson;
  } catch (ex) {
    console.log("Exception", ex.response);
    throw ex;
  }
}
