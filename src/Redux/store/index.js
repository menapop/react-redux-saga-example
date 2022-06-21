import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../Reducers/index";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/index";
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
