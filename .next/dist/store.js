'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _reduxDevtoolsExtension = require('redux-devtools-extension');

var _redux = require('redux');

var _reduxSaga = require('redux-saga');

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

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

var initStore = function initStore(initState) {
  var sagaMiddleware = (0, _reduxSaga2.default)();
  var store = (0, _redux.createStore)(reducer, (0, _reduxDevtoolsExtension.devToolsEnhancer)(), (0, _redux.applyMiddleware)(sagaMiddleware), initState);
  sagaMiddleware.run(_sagas2.default);
  return store;
};

var nextConnect = (0, _nextReduxWrapper2.default)(initStore);

exports.default = nextConnect;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLmpzIl0sIm5hbWVzIjpbImRldlRvb2xzRW5oYW5jZXIiLCJjcmVhdGVTdG9yZSIsImNvbWJpbmVSZWR1Y2VycyIsImFwcGx5TWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwibmV4dENvbm5lY3RSZWR1eCIsIlNhZ2FzIiwibWVzc2FnZXMiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJtc2ciLCJ1c2VybmFtZSIsInJlZHVjZXIiLCJpbml0U3RvcmUiLCJzYWdhTWlkZGxld2FyZSIsInN0b3JlIiwiaW5pdFN0YXRlIiwicnVuIiwibmV4dENvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFTOztBQUNULEFBQVMsQUFBYSxBQUFpQjs7QUFDdkMsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVc7Ozs7OztBQUVsQixJQUFNLFdBQVcsU0FBWCxBQUFXLFdBQXdCO01BQXZCLEFBQXVCLDRFQUFmLEFBQWU7TUFBWCxBQUFXLG1CQUN2Qzs7VUFBUSxPQUFSLEFBQWUsQUFDYjtTQUFBLEFBQUssQUFDSDthQUFPLE9BQVAsQUFBYyxBQUNoQjtTQUFBLEFBQUssQUFDSDt3REFBQSxBQUFXLFNBQU8sT0FBbEIsQUFBeUIsQUFDM0I7QUFDRTthQU5KLEFBTUksQUFBTyxBQUVaOztBQVREOztBQVdBLElBQU0sV0FBVyxTQUFYLEFBQVcsV0FBMkI7TUFBMUIsQUFBMEIsNEVBQWxCLEFBQWtCO01BQVgsQUFBVyxtQkFDMUM7O1VBQVEsT0FBUixBQUFlLEFBQ2I7U0FBQSxBQUFLLEFBQ0g7YUFBTyxPQUFQLEFBQWMsQUFDaEI7QUFDRTthQUpKLEFBSUksQUFBTyxBQUVaOztBQVBEOztBQVNBLElBQU07WUFBMEIsQUFFOUI7WUFGRixBQUFnQixBQUFnQjtBQUFBLEFBQzlCLENBRGM7O0FBS2hCLElBQU0sWUFBWSxTQUFaLEFBQVkscUJBQWEsQUFDN0I7TUFBTSxpQkFBTixBQUF1QixBQUN2QjtNQUFNLFFBQVEsd0JBQUEsQUFDWixTQURZLEFBRVosaURBQ0EsNEJBSFksQUFHWixBQUFnQixpQkFIbEIsQUFBYyxBQUlaLEFBRUY7aUJBQUEsQUFBZSxBQUFJLEFBQ25CO1NBQUEsQUFBUSxBQUNUO0FBVkQ7O0FBWUEsSUFBTSxjQUFjLGdDQUFwQixBQUFvQixBQUFpQixBQUVyQzs7a0JBQUEsQUFBZSIsImZpbGUiOiJzdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbm9haGNhcmRvemEvcHJvamVjdHMvY2hpdGNoYXQifQ==