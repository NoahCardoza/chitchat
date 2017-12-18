'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _react = require('react');

var _reactRedux = require('react-redux');

var _store = require('../store.js');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Messages = function Messages(_ref) {
  var messages = _ref.messages;
  return (0, _react.createElement)('div', { className: 'messages' }, messages.map(function (msg, key) {
    return (0, _react.createElement)('div', { key: key }, msg);
  }));
};

var mapStateMessagesProps = function mapStateMessagesProps(_ref2) {
  var messages = _ref2.messages;

  return { messages: messages };
};

Messages = (0, _reactRedux.connect)(mapStateMessagesProps)(Messages);

var Input = function Input(_ref3) {
  var dispatch = _ref3.dispatch,
      placeholder = _ref3.placeholder,
      _onSubmit = _ref3.onSubmit;

  var input = void 0;
  return (0, _react.createElement)('form', {
    action: 'javascript:',
    onSubmit: function onSubmit() {
      return _onSubmit(input);
    }
  }, (0, _react.createElement)('input', {
    ref: function ref(node) {
      return input = node;
    },
    placeholder: placeholder
  }));
};

var mapDispatchToMsgInputProps = function mapDispatchToMsgInputProps(dispatch) {
  return {
    placeholder: 'Fick!',
    onSubmit: function onSubmit(input) {
      dispatch({
        type: 'WS_SEND',
        msg: {
          type: 'NEW_MESSAGE',
          msg: input.value
        }
      });
      input.value = '';
    }
  };
};

var MsgInput = (0, _reactRedux.connect)(null, mapDispatchToMsgInputProps)(Input);

Input = (0, _reactRedux.connect)()(Input);

var Messenger = [(0, _react.createElement)(Messages), (0, _react.createElement)(Input, {
  placeholder: 'Type your heart out!'
})];

var App = function App() {
  return (0, _react.createElement)('div', { className: 'chitchat' }, (0, _react.createElement)(_head2.default, null, (0, _react.createElement)('title', null, 'Chat-Chat'), (0, _react.createElement)('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' })), (0, _react.createElement)(Messages), (0, _react.createElement)(MsgInput));
};

exports.default = (0, _store2.default)(App);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhlYWQiLCJjcmVhdGVFbGVtZW50IiwiJCIsIlByb3ZpZGVyIiwiY29ubmVjdCIsIm5leHRDb25uZWN0IiwiTWVzc2FnZXMiLCJtZXNzYWdlcyIsImNsYXNzTmFtZSIsIm1hcCIsIm1zZyIsImtleSIsIm1hcFN0YXRlTWVzc2FnZXNQcm9wcyIsIklucHV0IiwiZGlzcGF0Y2giLCJwbGFjZWhvbGRlciIsIm9uU3VibWl0IiwiaW5wdXQiLCJhY3Rpb24iLCJyZWYiLCJub2RlIiwibWFwRGlzcGF0Y2hUb01zZ0lucHV0UHJvcHMiLCJ0eXBlIiwidmFsdWUiLCJNc2dJbnB1dCIsIk1lc3NlbmdlciIsIkFwcCIsIm5hbWUiLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFpQjs7QUFDMUIsQUFBUyxBQUFVOztBQUNuQixBQUFPLEFBQWlCOzs7Ozs7QUFFeEIsSUFBSSxXQUFXLHdCQUFBO01BQUEsQUFBRyxnQkFBSCxBQUFHO21DQUNoQixBQUFFLE9BQU8sRUFBRSxXQUFYLEFBQVMsQUFBYSx1QkFDcEIsQUFBUyxJQUFJLFVBQUEsQUFBQyxLQUFELEFBQU0sS0FBTjtXQUFjLDBCQUFBLEFBQUUsT0FBTyxFQUFFLEtBQVgsQUFBUyxPQUF2QixBQUFjLEFBQWtCO0FBRmxDLEFBQ2IsQUFDRSxHQUFBLENBREY7QUFERjs7QUFJQSxJQUFNLHdCQUF3QixTQUF4QixBQUF3Qiw2QkFBa0I7TUFBZixBQUFlLGlCQUFmLEFBQWUsQUFDOUM7O1NBQU8sRUFBRSxVQUFULEFBQU8sQUFDUjtBQUZEOztBQUlBLFdBQVcseUJBQUEsQUFBUSx1QkFBbkIsQUFBVyxBQUErQjs7QUFFMUMsSUFBSSxRQUFRLHNCQUF5QztNQUF0QyxBQUFzQyxpQkFBdEMsQUFBc0M7TUFBNUIsQUFBNEIsb0JBQTVCLEFBQTRCO01BQWYsQUFBZSxrQkFBZixBQUFlLEFBQ25EOztNQUFJLGFBQUosQUFDQTttQ0FDRSxBQUFFO1lBQVEsQUFDRCxBQUNQO2NBQVUsb0JBQUE7YUFBTSxVQUFOLEFBQU0sQUFBUztBQUYzQixBQUFVO0FBQUEsQUFDUixHQURGLDRCQUlFLEFBQUU7U0FDSyxtQkFBQTthQUFRLFFBQVIsQUFBZ0I7QUFEWixBQUVUO2lCQVBOLEFBQ0UsQUFJRSxBQUFXLEFBS2hCO0FBTGdCLEFBQ1QsR0FERjtBQVBOOztBQWNBLElBQU0sNkJBQTZCLFNBQTdCLEFBQTZCLHFDQUFZLEFBQzdDOztpQkFBTyxBQUNRLEFBQ2I7Y0FBVSx5QkFBUyxBQUNqQjs7Y0FBUyxBQUNELEFBQ047O2dCQUFLLEFBQ0csQUFDTjtlQUFLLE1BSlQsQUFBUyxBQUVGLEFBRVEsQUFHZjtBQUxPLEFBQ0g7QUFISyxBQUNQO1lBTUYsQUFBTSxRQUFOLEFBQWMsQUFDZjtBQVhILEFBQU8sQUFhUjtBQWJRLEFBQ0w7QUFGSjs7QUFnQkEsSUFBTSxXQUFXLHlCQUFBLEFBQVEsTUFBUixBQUFjLDRCQUEvQixBQUFpQixBQUEwQzs7QUFFM0QsUUFBUSwyQkFBUixBQUFRLEFBQVU7O0FBRWxCLElBQU0sYUFBYSwwQkFBRCxBQUFDLEFBQUUscUNBQVcsQUFBRTtlQUFsQyxBQUFrQixBQUFjLEFBQVMsQUFDMUI7QUFEMEIsQUFDdkMsQ0FEOEIsQ0FBZDs7QUFJbEIsSUFBTSxNQUFNLFNBQU4sQUFBTSxNQUFBO1NBQ1YsMEJBQUEsQUFBRSxPQUFPLEVBQUUsV0FBWCxBQUFTLEFBQWEsY0FDcEIsQUFBRSwwQ0FBRixBQUFRLE1BQ04sMEJBQUEsQUFBRSxTQUFGLEFBQVcsTUFEYixBQUNFLEFBQWlCLGNBQ2pCLDBCQUFBLEFBQUUsUUFBUSxFQUFDLE1BQUQsQUFBTyxZQUFZLFNBSGpDLEFBQ0UsQUFFRSxBQUFVLEFBQTJCLDZDQUN2QywwQkFKRixBQUlFLEFBQUUsV0FDRiwwQkFOUSxBQUNWLEFBS0UsQUFBRTtBQU5OLEFBUUE7O2tCQUFlLHFCQUFmLEFBQWUsQUFBWSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbm9haGNhcmRvemEvcHJvamVjdHMvY2hpdGNoYXQifQ==