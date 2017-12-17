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
  var dispatch = _ref3.dispatch;

  return (0, _react.createElement)('form', {
    action: 'javascript:',
    onSubmit: function onSubmit() {
      dispatch({
        type: 'WS_SEND',
        msg: {
          type: 'NEW_MESSAGE',
          msg: msgInput.value
        }
      });
      msgInput.value = '';
    }
  }, (0, _react.createElement)('input', {
    id: 'msgInput',
    placeholder: 'Type your heart out!'
  }));
};

Input = (0, _reactRedux.connect)()(Input);

var App = function App(_ref4) {
  var state = _ref4.state;
  return (0, _react.createElement)(_reactRedux.Provider, { store: (0, _store2.default)() }, (0, _react.createElement)('div', { className: 'chitchat' }, (0, _react.createElement)(_head2.default, null, (0, _react.createElement)('title', null, 'Chat-Chat'), (0, _react.createElement)('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' })), (0, _react.createElement)(Messages), (0, _react.createElement)(Input)));
};

exports.default = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhlYWQiLCJjcmVhdGVFbGVtZW50IiwiJCIsIlByb3ZpZGVyIiwiY29ubmVjdCIsIm1ha2VTdG9yZSIsIk1lc3NhZ2VzIiwibWVzc2FnZXMiLCJjbGFzc05hbWUiLCJtYXAiLCJtc2ciLCJrZXkiLCJtYXBTdGF0ZU1lc3NhZ2VzUHJvcHMiLCJJbnB1dCIsImRpc3BhdGNoIiwiYWN0aW9uIiwib25TdWJtaXQiLCJ0eXBlIiwibXNnSW5wdXQiLCJ2YWx1ZSIsImlkIiwicGxhY2Vob2xkZXIiLCJBcHAiLCJzdGF0ZSIsInN0b3JlIiwibmFtZSIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFTLEFBQWlCOztBQUMxQixBQUFTLEFBQVU7O0FBQ25CLEFBQU8sQUFBZTs7Ozs7O0FBRXRCLElBQUksV0FBVyx3QkFBQTtNQUFBLEFBQUcsZ0JBQUgsQUFBRzttQ0FDaEIsQUFBRSxPQUFPLEVBQUUsV0FBWCxBQUFTLEFBQWEsdUJBQ3BCLEFBQVMsSUFBSSxVQUFBLEFBQUMsS0FBRCxBQUFNLEtBQU47V0FBYywwQkFBQSxBQUFFLE9BQU8sRUFBRSxLQUFYLEFBQVMsT0FBdkIsQUFBYyxBQUFrQjtBQUZsQyxBQUNiLEFBQ0UsR0FBQSxDQURGO0FBREY7O0FBSUEsSUFBTSx3QkFBd0IsU0FBeEIsQUFBd0IsNkJBQWtCO01BQWYsQUFBZSxpQkFBZixBQUFlLEFBQzlDOztTQUFPLEVBQUUsVUFBVCxBQUFPLEFBQ1I7QUFGRDs7QUFJQSxXQUFXLHlCQUFBLEFBQVEsdUJBQW5CLEFBQVcsQUFBK0I7O0FBRTFDLElBQUksUUFBUSxzQkFBa0I7TUFBZixBQUFlLGlCQUFmLEFBQWUsQUFDNUI7O21DQUNFLEFBQUU7WUFBUSxBQUNELEFBQ1A7Y0FBVSxvQkFBTSxBQUNkOztjQUFTLEFBQ0QsQUFDTjs7Z0JBQUssQUFDRyxBQUNOO2VBQUssU0FKVCxBQUFTLEFBRUYsQUFFVyxBQUdsQjtBQUxPLEFBQ0g7QUFISyxBQUNQO2VBTUYsQUFBUyxRQUFULEFBQWlCLEFBQ2xCO0FBWEgsQUFBVTtBQUFBLEFBQ1IsR0FERiw0QkFhRSxBQUFFO1FBQVMsQUFDTCxBQUNKO2lCQWhCTixBQUNFLEFBYUUsQUFBVyxBQUVJLEFBR3BCO0FBTGdCLEFBQ1QsR0FERjtBQWZOOztBQXNCQSxRQUFRLDJCQUFSLEFBQVEsQUFBVTs7QUFFbEIsSUFBTSxNQUFNLFNBQU4sQUFBTSxXQUFBO01BQUEsQUFBRyxjQUFILEFBQUc7U0FDYixBQUFFLGdEQUFVLEVBQUMsT0FBYixBQUFZLEFBQVEsMEJBQ2xCLDBCQUFBLEFBQUUsT0FBTyxFQUFFLFdBQVgsQUFBUyxBQUFhLGNBQ3BCLEFBQUUsMENBQUYsQUFBUSxNQUNOLDBCQUFBLEFBQUUsU0FBRixBQUFXLE1BRGIsQUFDRSxBQUFpQixjQUNqQiwwQkFBQSxBQUFFLFFBQVEsRUFBQyxNQUFELEFBQU8sWUFBWSxTQUhqQyxBQUNFLEFBRUUsQUFBVSxBQUEyQiw2Q0FDdkMsMEJBSkYsQUFJRSxBQUFFLFdBQ0YsMEJBUE0sQUFDVixBQUNFLEFBS0UsQUFBRTtBQVBSLEFBU0E7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL25vYWhjYXJkb3phL3Byb2plY3RzL2NoaXRjaGF0In0=