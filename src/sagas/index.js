import { takeLatest, all } from "redux-saga/effects";
import { registerSaga } from "./register";
import { loginSaga, logoutSaga } from "./login";
import { LOGIN_USER, LOGOUT_USER } from "../reducers/login";
import { REGISTER_USER } from "../reducers/register";

export default function* rootSaga() {
  yield all([
    yield takeLatest(LOGOUT_USER, logoutSaga),
    yield takeLatest(REGISTER_USER, registerSaga),
    yield takeLatest(LOGIN_USER, loginSaga)
  ]);
}
