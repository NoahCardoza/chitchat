import { devToolsEnhancer } from 'redux-devtools-extension';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import nextConnectRedux from 'next-redux-wrapper';
import Sagas from './sagas.js';

const messages = (state = [], action) => {
  switch (action.type) {
    case 'SET_HISTORY':
      return action.messages;
    case 'NEW_MESSAGE':
      return [...state, {...action, type: undefined}];
    default:
      return state;
  }
}

const username = (state = false, action) => {
  console.log(action);
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

const initStore = initState => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducer,
    devToolsEnhancer(),
    applyMiddleware(sagaMiddleware),
    initState
  );
  sagaMiddleware.run(Sagas);
  return (store);
}

const nextConnect = nextConnectRedux(initStore);

export default nextConnect;
