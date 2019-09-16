import { put, takeLatest, all, call } from 'redux-saga/effects';
import * as types from '../actions/index';

export default function* rootSaga() {
   yield all([
    yield takeLatest(types.REGISTER_USER, registerSaga),
    yield takeLatest(types.LOGIN_USER, loginSaga),
   ]);
}

function* registerSaga(payload) {
  try {
    const response = yield call(registerUserService, payload);  
    yield put({ type: types.REGISTER_USER_SUCCESS, response });
  } catch(error) {
    yield put({ type: types.REGISTER_USER_ERROR, error });
  }
}

function* loginSaga(payload) {
  try {
    const response = yield call(loginUserService, payload);
    console.log("This is loginSaga response", response)
    yield put({ type: types.LOGIN_USER_SUCCESS, response });
  } catch(error) {
    yield put({ type: types.LOGIN_USER_ERROR, error });
  }
}

function* registerUserService (request){
 
  //const REGISTER_API_ENDPOINT = 'http://localhost:3000/api/v1/register';
  //const jsonVal = yield call([response,response.json]);  
  
  const REGISTER_API_ENDPOINT = 'http://192.168.2.46:8090/v1/auth/register';
  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request.user)
  };

  try {
    const response = yield call(fetch, REGISTER_API_ENDPOINT, parameters);
    console.log("response",response);
    const responseJson = yield call([response,response.json]);
    return responseJson;
  }
  catch(ex)
  {
    console.log("Exception", ex.response);
    throw ex;
  } 

  // return fetch(REGISTER_API_ENDPOINT, {})
  //   .then(response => {
  //     return response.json();
  //   })
  //   .then(json => {
  //     return json;
  //   });
};

function* loginUserService (request){
  const LOGIN_API_ENDPOINT = 'http://192.168.2.46:8090/v1/auth/login';
  
  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request.user)
  };

  console.log("This is Parameters", parameters);
  
  try {
    const response = yield call(fetch, LOGIN_API_ENDPOINT, parameters);    
    const responseJson = yield call([response, response.json]);    
    console.log("RESPONSE", responseJson);
    console.log("Response success", responseJson.success);
    console.log("Response message", responseJson.message);
    return responseJson;
  }
  catch(ex)
  {
    console.log("Exception", ex.response);
    throw ex;
  }  
};



