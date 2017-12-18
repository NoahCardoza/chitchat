webpackHotUpdate(5,{

/***/ 419:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _head = __webpack_require__(189);

var _head2 = _interopRequireDefault(_head);

var _react = __webpack_require__(17);

var _reactRedux = __webpack_require__(400);

var _store = __webpack_require__(444);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS42YzdkNDE0ZmI0ZmU2YjU2YTA2Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/NGYwZjY0NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCBhcyAkIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvdmlkZXIsIGNvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBuZXh0Q29ubmVjdCBmcm9tICcuLi9zdG9yZS5qcyc7XG5cbmxldCBNZXNzYWdlcyA9ICh7IG1lc3NhZ2VzIH0pID0+XG4gICQoJ2RpdicsIHsgY2xhc3NOYW1lOiAnbWVzc2FnZXMnIH0sXG4gICAgbWVzc2FnZXMubWFwKChtc2csIGtleSkgPT4gJCgnZGl2JywgeyBrZXkgfSwgbXNnKSkpO1xuXG5jb25zdCBtYXBTdGF0ZU1lc3NhZ2VzUHJvcHMgPSAoeyBtZXNzYWdlcyB9KSA9PiB7XG4gIHJldHVybiB7IG1lc3NhZ2VzIH07XG59XG5cbk1lc3NhZ2VzID0gY29ubmVjdChtYXBTdGF0ZU1lc3NhZ2VzUHJvcHMpKE1lc3NhZ2VzKTtcblxubGV0IElucHV0ID0gKHsgZGlzcGF0Y2gsIHBsYWNlaG9sZGVyLCBvblN1Ym1pdCB9KSA9PiB7XG4gIGxldCBpbnB1dDtcbiAgcmV0dXJuIChcbiAgICAkKCdmb3JtJywge1xuICAgICAgYWN0aW9uOidqYXZhc2NyaXB0OicsXG4gICAgICBvblN1Ym1pdDogKCkgPT4gb25TdWJtaXQoaW5wdXQpXG4gICAgfSxcbiAgICAgICQoJ2lucHV0Jywge1xuICAgICAgICByZWY6IG5vZGUgPT4gaW5wdXQgPSBub2RlLFxuICAgICAgICBwbGFjZWhvbGRlclxuICAgICAgfSkpXG4gIClcbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb01zZ0lucHV0UHJvcHMgPSBkaXNwYXRjaCA9PiB7XG4gIHJldHVybiB7XG4gICAgcGxhY2Vob2xkZXI6ICdUeXBlIHlvdXIgaGVhcnQgb3V0IScsXG4gICAgb25TdWJtaXQ6IGlucHV0ID0+IHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogJ1dTX1NFTkQnLFxuICAgICAgICBtc2c6IHtcbiAgICAgICAgICB0eXBlOiAnTkVXX01FU1NBR0UnLFxuICAgICAgICAgIG1zZzogaW5wdXQudmFsdWVcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgIH1cbiAgfTtcbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1VzZXJuYW1lSW5wdXRQcm9wcyA9IGRpc3BhdGNoID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwbGFjZWhvbGRlcjogJ1doYXQgd291bGQgeW91IGxpa2UgdG8gYmUgZmVhcmVkIGJ5PycsXG4gICAgb25TdWJtaXQ6IGlucHV0ID0+IHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogJ1dTX1NFTkQnLFxuICAgICAgICBtc2c6IHtcbiAgICAgICAgICB0eXBlOiAnU0VUX1VTRVJOQU1FJyxcbiAgICAgICAgICBtc2c6IGlucHV0LnZhbHVlXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICB9XG4gIH07XG59XG5cblxuY29uc3QgTXNnSW5wdXQgPSBjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Nc2dJbnB1dFByb3BzKShJbnB1dCk7XG5cbklucHV0ID0gY29ubmVjdCgpKElucHV0KTtcblxuY29uc3QgTWVzc2VuZ2VyID0gWyQoTWVzc2FnZXMpLCAkKElucHV0LCB7XG4gIHBsYWNlaG9sZGVyOiAnVHlwZSB5b3VyIGhlYXJ0IG91dCEnXG59KV1cblxuY29uc3QgQXBwID0gKCkgPT5cbiAgJCgnZGl2JywgeyBjbGFzc05hbWU6ICdjaGl0Y2hhdCcgfSxcbiAgICAkKEhlYWQsIG51bGwsXG4gICAgICAkKCd0aXRsZScsIG51bGwsICdDaGF0LUNoYXQnKSxcbiAgICAgICQoJ21ldGEnLCB7bmFtZTogJ3ZpZXdwb3J0JywgY29udGVudDonaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCd9KSksXG4gICAgJChNZXNzYWdlcyksXG4gICAgJChNc2dJbnB1dCkpO1xuXG5leHBvcnQgZGVmYXVsdCBuZXh0Q29ubmVjdChBcHApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBRkE7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUZBO0FBQ0E7QUFJQTtBQUFBO0FBQ0E7QUFHQTtBQUpBO0FBUkE7QUFDQTtBQWFBOztBQUdBO0FBQUE7O0FBR0E7O0FBRUE7QUFBQTtBQURBO0FBRkE7QUFNQTtBQUdBO0FBWkE7QUFGQTtBQUNBO0FBZUE7O0FBR0E7QUFBQTs7QUFHQTs7QUFFQTtBQUFBO0FBREE7QUFGQTtBQU1BO0FBR0E7QUFaQTtBQUZBO0FBQ0E7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFPQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==