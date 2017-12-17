import { devToolsEnhancer } from 'redux-devtools-extension';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Sagas from './sagas.js';

const messages = (state = [], action) => {
  switch (action.type) {
    case 'SET_HISTORY':
      return action.messages;
    case 'NEW_MESSAGE':
      return [...state, action.msg];
    default:
      return state;
  }
}

const username = (state = false, action) => {
  switch (action.type) {
    case 'SET_USERNAME':
      return action.username;
    default:
      return state;
  }
}

const reducer = combineReducers({
  messages,
  username
});

export default function() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducer,
    devToolsEnhancer(),
    applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(Sagas);
  return (store);
}