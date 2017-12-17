'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var sagaMiddleware = (0, _reduxSaga2.default)();
  var store = (0, _redux.createStore)(reducer, (0, _reduxDevtoolsExtension.devToolsEnhancer)(), (0, _redux.applyMiddleware)(sagaMiddleware));
  sagaMiddleware.run(_sagas2.default);
  return store;
};

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _reduxDevtoolsExtension = require('redux-devtools-extension');

var _redux = require('redux');

var _reduxSaga = require('redux-saga');

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _sagas = require('./sagas.js');

var _sagas2 = _interopRequireDefault(_sagas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var messages = function messages() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case 'SET_HISTORY':
      return action.messages;
    case 'NEW_MESSAGE':
      return [].concat((0, _toConsumableArray3.default)(state), [action.msg]);
    default:
      return state;
  }
};

var username = function username() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments[1];

  switch (action.type) {
    case 'SET_USERNAME':
      return action.username;
    default:
      return state;
  }
};

var reducer = (0, _redux.combineReducers)({
  messages: messages,
  username: username
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLmpzIl0sIm5hbWVzIjpbImRldlRvb2xzRW5oYW5jZXIiLCJjcmVhdGVTdG9yZSIsImNvbWJpbmVSZWR1Y2VycyIsImFwcGx5TWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwiU2FnYXMiLCJtZXNzYWdlcyIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIm1zZyIsInVzZXJuYW1lIiwicmVkdWNlciIsInNhZ2FNaWRkbGV3YXJlIiwic3RvcmUiLCJydW4iXSwibWFwcGluZ3MiOiI7Ozs7OztrQkE4QmUsWUFBVyxBQUN4QjtNQUFNLGlCQUFOLEFBQXVCLEFBQ3ZCO01BQU0sUUFBUSx3QkFBQSxBQUNaLFNBRFksQUFFWixpREFDQSw0QkFIRixBQUFjLEFBR1osQUFBZ0IsQUFFbEI7aUJBQUEsQUFBZSxBQUFJLEFBQ25CO1NBQUEsQUFBUSxBQUNUOzs7Ozs7O0FBdkNELEFBQVM7O0FBQ1QsQUFBUyxBQUFhLEFBQWlCOztBQUN2QyxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFXOzs7Ozs7QUFFbEIsSUFBTSxXQUFXLFNBQVgsQUFBVyxXQUF3QjtNQUF2QixBQUF1Qiw0RUFBZixBQUFlO01BQVgsQUFBVyxtQkFDdkM7O1VBQVEsT0FBUixBQUFlLEFBQ2I7U0FBQSxBQUFLLEFBQ0g7YUFBTyxPQUFQLEFBQWMsQUFDaEI7U0FBQSxBQUFLLEFBQ0g7d0RBQUEsQUFBVyxTQUFPLE9BQWxCLEFBQXlCLEFBQzNCO0FBQ0U7YUFOSixBQU1JLEFBQU8sQUFFWjs7QUFURDs7QUFXQSxJQUFNLFdBQVcsU0FBWCxBQUFXLFdBQTJCO01BQTFCLEFBQTBCLDRFQUFsQixBQUFrQjtNQUFYLEFBQVcsbUJBQzFDOztVQUFRLE9BQVIsQUFBZSxBQUNiO1NBQUEsQUFBSyxBQUNIO2FBQU8sT0FBUCxBQUFjLEFBQ2hCO0FBQ0U7YUFKSixBQUlJLEFBQU8sQUFFWjs7QUFQRDs7QUFTQSxJQUFNO1lBQTBCLEFBRTlCO1lBRkYsQUFBZ0IsQUFBZ0IsQUFLaEM7QUFMZ0MsQUFDOUIsQ0FEYyIsImZpbGUiOiJzdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbm9haGNhcmRvemEvcHJvamVjdHMvY2hpdGNoYXQifQ==