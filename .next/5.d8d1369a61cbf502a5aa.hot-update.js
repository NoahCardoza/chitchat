webpackHotUpdate(5,{

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _head = __webpack_require__(189);

var _head2 = _interopRequireDefault(_head);

var _react = __webpack_require__(17);

var _reactRedux = __webpack_require__(437);

var _store = __webpack_require__(448);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/noahcardoza/projects/chitchat/pages/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/noahcardoza/projects/chitchat/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5kOGQxMzY5YTYxY2JmNTAyYTVhYS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/ODA2ZjVjOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCBhcyAkIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvdmlkZXIsIGNvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBuZXh0Q29ubmVjdCBmcm9tICcuLi9zdG9yZS5qcyc7XG5cbmxldCBNZXNzYWdlcyA9ICh7IG1lc3NhZ2VzIH0pID0+XG4gICQoJ2RpdicsIHsgY2xhc3NOYW1lOiAnbWVzc2FnZXMnIH0sXG4gICAgbWVzc2FnZXMubWFwKChtc2csIGtleSkgPT4gJCgnZGl2JywgeyBrZXkgfSwgbXNnKSkpO1xuXG5jb25zdCBtYXBTdGF0ZU1lc3NhZ2VzUHJvcHMgPSAoeyBtZXNzYWdlcyB9KSA9PiB7XG4gIHJldHVybiB7IG1lc3NhZ2VzIH07XG59XG5cbk1lc3NhZ2VzID0gY29ubmVjdChtYXBTdGF0ZU1lc3NhZ2VzUHJvcHMpKE1lc3NhZ2VzKTtcblxubGV0IElucHV0ID0gKHsgZGlzcGF0Y2gsIHBsYWNlaG9sZGVyLCBvblN1Ym1pdCB9KSA9PiB7XG4gIGxldCBpbnB1dDtcbiAgcmV0dXJuIChcbiAgICAkKCdmb3JtJywge1xuICAgICAgYWN0aW9uOidqYXZhc2NyaXB0OicsXG4gICAgICBvblN1Ym1pdDogKCkgPT4gb25TdWJtaXQoaW5wdXQpXG4gICAgfSxcbiAgICAgICQoJ2lucHV0Jywge1xuICAgICAgICByZWY6IG5vZGUgPT4gaW5wdXQgPSBub2RlLFxuICAgICAgICBwbGFjZWhvbGRlclxuICAgICAgfSkpXG4gIClcbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb01zZ0lucHV0UHJvcHMgPSBkaXNwYXRjaCA9PiB7XG4gIHJldHVybiB7XG4gICAgcGxhY2Vob2xkZXI6ICdGaWNrIScsXG4gICAgb25TdWJtaXQ6IGlucHV0ID0+IHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogJ1dTX1NFTkQnLFxuICAgICAgICBtc2c6IHtcbiAgICAgICAgICB0eXBlOiAnTkVXX01FU1NBR0UnLFxuICAgICAgICAgIG1zZzogaW5wdXQudmFsdWVcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgIH1cbiAgfTtcbn1cblxuY29uc3QgTXNnSW5wdXQgPSBjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Nc2dJbnB1dFByb3BzKShJbnB1dCk7XG5cbklucHV0ID0gY29ubmVjdCgpKElucHV0KTtcblxuY29uc3QgTWVzc2VuZ2VyID0gWyQoTWVzc2FnZXMpLCAkKElucHV0LCB7XG4gIHBsYWNlaG9sZGVyOiAnVHlwZSB5b3VyIGhlYXJ0IG91dCEnXG59KV1cblxuY29uc3QgQXBwID0gKCkgPT5cbiAgJCgnZGl2JywgeyBjbGFzc05hbWU6ICdjaGl0Y2hhdCcgfSxcbiAgICAkKEhlYWQsIG51bGwsXG4gICAgICAkKCd0aXRsZScsIG51bGwsICdDaGF0LUNoYXQnKSxcbiAgICAgICQoJ21ldGEnLCB7bmFtZTogJ3ZpZXdwb3J0JywgY29udGVudDonaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCd9KSksXG4gICAgJChNZXNzYWdlcyksXG4gICAgJChNc2dJbnB1dCkpO1xuXG5leHBvcnQgZGVmYXVsdCBuZXh0Q29ubmVjdChBcHApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBRkE7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUZBO0FBQ0E7QUFJQTtBQUFBO0FBQ0E7QUFHQTtBQUpBO0FBUkE7QUFDQTtBQWFBOztBQUdBO0FBQUE7O0FBR0E7O0FBRUE7QUFBQTtBQURBO0FBRkE7QUFNQTtBQUdBO0FBWkE7QUFGQTtBQUNBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFPQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==