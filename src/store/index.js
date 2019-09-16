import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from "redux";
import reducer from "../reducers/index";
import rootSaga from '../sagas';
import { logger } from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware,logger));

sagaMiddleware.run(rootSaga);

export default store;


