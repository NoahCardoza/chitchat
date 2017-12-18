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
    placeholder: 'Type your heart out!',
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

var mapDispatchToUsernameInputProps = function mapDispatchToUsernameInputProps(dispatch) {
  return {
    placeholder: 'What would you like to be feared by?',
    onSubmit: function onSubmit(input) {
      dispatch({
        type: 'WS_SEND',
        msg: {
          type: 'SET_USERNAME',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhlYWQiLCJjcmVhdGVFbGVtZW50IiwiJCIsIlByb3ZpZGVyIiwiY29ubmVjdCIsIm5leHRDb25uZWN0IiwiTWVzc2FnZXMiLCJtZXNzYWdlcyIsImNsYXNzTmFtZSIsIm1hcCIsIm1zZyIsImtleSIsIm1hcFN0YXRlTWVzc2FnZXNQcm9wcyIsIklucHV0IiwiZGlzcGF0Y2giLCJwbGFjZWhvbGRlciIsIm9uU3VibWl0IiwiaW5wdXQiLCJhY3Rpb24iLCJyZWYiLCJub2RlIiwibWFwRGlzcGF0Y2hUb01zZ0lucHV0UHJvcHMiLCJ0eXBlIiwidmFsdWUiLCJtYXBEaXNwYXRjaFRvVXNlcm5hbWVJbnB1dFByb3BzIiwiTXNnSW5wdXQiLCJNZXNzZW5nZXIiLCJBcHAiLCJuYW1lIiwiY29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVMsQUFBaUI7O0FBQzFCLEFBQVMsQUFBVTs7QUFDbkIsQUFBTyxBQUFpQjs7Ozs7O0FBRXhCLElBQUksV0FBVyx3QkFBQTtNQUFBLEFBQUcsZ0JBQUgsQUFBRzttQ0FDaEIsQUFBRSxPQUFPLEVBQUUsV0FBWCxBQUFTLEFBQWEsdUJBQ3BCLEFBQVMsSUFBSSxVQUFBLEFBQUMsS0FBRCxBQUFNLEtBQU47V0FBYywwQkFBQSxBQUFFLE9BQU8sRUFBRSxLQUFYLEFBQVMsT0FBdkIsQUFBYyxBQUFrQjtBQUZsQyxBQUNiLEFBQ0UsR0FBQSxDQURGO0FBREY7O0FBSUEsSUFBTSx3QkFBd0IsU0FBeEIsQUFBd0IsNkJBQWtCO01BQWYsQUFBZSxpQkFBZixBQUFlLEFBQzlDOztTQUFPLEVBQUUsVUFBVCxBQUFPLEFBQ1I7QUFGRDs7QUFJQSxXQUFXLHlCQUFBLEFBQVEsdUJBQW5CLEFBQVcsQUFBK0I7O0FBRTFDLElBQUksUUFBUSxzQkFBeUM7TUFBdEMsQUFBc0MsaUJBQXRDLEFBQXNDO01BQTVCLEFBQTRCLG9CQUE1QixBQUE0QjtNQUFmLEFBQWUsa0JBQWYsQUFBZSxBQUNuRDs7TUFBSSxhQUFKLEFBQ0E7bUNBQ0UsQUFBRTtZQUFRLEFBQ0QsQUFDUDtjQUFVLG9CQUFBO2FBQU0sVUFBTixBQUFNLEFBQVM7QUFGM0IsQUFBVTtBQUFBLEFBQ1IsR0FERiw0QkFJRSxBQUFFO1NBQ0ssbUJBQUE7YUFBUSxRQUFSLEFBQWdCO0FBRFosQUFFVDtpQkFQTixBQUNFLEFBSUUsQUFBVyxBQUtoQjtBQUxnQixBQUNULEdBREY7QUFQTjs7QUFjQSxJQUFNLDZCQUE2QixTQUE3QixBQUE2QixxQ0FBWSxBQUM3Qzs7aUJBQU8sQUFDUSxBQUNiO2NBQVUseUJBQVMsQUFDakI7O2NBQVMsQUFDRCxBQUNOOztnQkFBSyxBQUNHLEFBQ047ZUFBSyxNQUpULEFBQVMsQUFFRixBQUVRLEFBR2Y7QUFMTyxBQUNIO0FBSEssQUFDUDtZQU1GLEFBQU0sUUFBTixBQUFjLEFBQ2Y7QUFYSCxBQUFPLEFBYVI7QUFiUSxBQUNMO0FBRko7O0FBZ0JBLElBQU0sa0NBQWtDLFNBQWxDLEFBQWtDLDBDQUFZLEFBQ2xEOztpQkFBTyxBQUNRLEFBQ2I7Y0FBVSx5QkFBUyxBQUNqQjs7Y0FBUyxBQUNELEFBQ047O2dCQUFLLEFBQ0csQUFDTjtlQUFLLE1BSlQsQUFBUyxBQUVGLEFBRVEsQUFHZjtBQUxPLEFBQ0g7QUFISyxBQUNQO1lBTUYsQUFBTSxRQUFOLEFBQWMsQUFDZjtBQVhILEFBQU8sQUFhUjtBQWJRLEFBQ0w7QUFGSjs7QUFpQkEsSUFBTSxXQUFXLHlCQUFBLEFBQVEsTUFBUixBQUFjLDRCQUEvQixBQUFpQixBQUEwQzs7QUFFM0QsUUFBUSwyQkFBUixBQUFRLEFBQVU7O0FBRWxCLElBQU0sYUFBYSwwQkFBRCxBQUFDLEFBQUUscUNBQVcsQUFBRTtlQUFsQyxBQUFrQixBQUFjLEFBQVMsQUFDMUI7QUFEMEIsQUFDdkMsQ0FEOEIsQ0FBZDs7QUFJbEIsSUFBTSxNQUFNLFNBQU4sQUFBTSxNQUFBO1NBQ1YsMEJBQUEsQUFBRSxPQUFPLEVBQUUsV0FBWCxBQUFTLEFBQWEsY0FDcEIsQUFBRSwwQ0FBRixBQUFRLE1BQ04sMEJBQUEsQUFBRSxTQUFGLEFBQVcsTUFEYixBQUNFLEFBQWlCLGNBQ2pCLDBCQUFBLEFBQUUsUUFBUSxFQUFDLE1BQUQsQUFBTyxZQUFZLFNBSGpDLEFBQ0UsQUFFRSxBQUFVLEFBQTJCLDZDQUN2QywwQkFKRixBQUlFLEFBQUUsV0FDRiwwQkFOUSxBQUNWLEFBS0UsQUFBRTtBQU5OLEFBUUE7O2tCQUFlLHFCQUFmLEFBQWUsQUFBWSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbm9haGNhcmRvemEvcHJvamVjdHMvY2hpdGNoYXQifQ==