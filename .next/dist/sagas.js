'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Sagas;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _effects = require('redux-saga/effects');

var _reduxSaga = require('redux-saga');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(watchWebSockets),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(Sagas);

var watchMessages = function watchMessages(socket) {
  return (0, _reduxSaga.eventChannel)(function (emitter) {
    socket.onopen = function () {
      return console.log("WS: Connection.");
    };
    socket.onmessage = function (msg) {
      return emitter(msg);
    };
    return function () {
      return socket.close();
    };
  });
};

function watchWebSockets() {
  var socket, socketChannel, _ref, incoming, outgoing;

  return _regenerator2.default.wrap(function watchWebSockets$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          socket = new WebSocket('ws://127.0.0.1:1337');
          _context.next = 3;
          return (0, _effects.call)(watchMessages, socket);

        case 3:
          socketChannel = _context.sent;

        case 4:
          if (!42) {
            _context.next = 21;
            break;
          }

          _context.next = 7;
          return (0, _effects.race)({
            incoming: (0, _effects.take)(socketChannel),
            outgoing: (0, _effects.take)('WS_SEND')
          });

        case 7:
          _ref = _context.sent;
          incoming = _ref.incoming;
          outgoing = _ref.outgoing;

          console.log("Something!!");

          if (!incoming) {
            _context.next = 17;
            break;
          }

          console.log('Message:', incoming);
          _context.next = 15;
          return (0, _effects.put)(JSON.parse(incoming.data));

        case 15:
          _context.next = 19;
          break;

        case 17:
          console.log('Send:', outgoing.msg);
          socket.send((0, _stringify2.default)(outgoing.msg));

        case 19:
          _context.next = 4;
          break;

        case 21:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}

function Sagas() {
  return _regenerator2.default.wrap(function Sagas$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return [watchWebSockets()];

        case 2:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhZ2FzLmpzIl0sIm5hbWVzIjpbIndhdGNoV2ViU29ja2V0cyIsIlNhZ2FzIiwidGFrZSIsInB1dCIsImNhbGwiLCJyYWNlIiwiZXZlbnRDaGFubmVsIiwid2F0Y2hNZXNzYWdlcyIsInNvY2tldCIsIm9ub3BlbiIsImNvbnNvbGUiLCJsb2ciLCJvbm1lc3NhZ2UiLCJlbWl0dGVyIiwibXNnIiwiY2xvc2UiLCJXZWJTb2NrZXQiLCJzb2NrZXRDaGFubmVsIiwiaW5jb21pbmciLCJvdXRnb2luZyIsIkpTT04iLCJwYXJzZSIsImRhdGEiLCJzZW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFTLEFBQU0sQUFBSyxBQUFNOztBQUMxQixBQUFTOzs7O3NEQVFDLEE7dUQsQUFtQmU7O0FBekJ6QixJQUFNLGdCQUFnQixTQUFoQixBQUFnQixzQkFBQTtzQ0FBdUIsbUJBQVcsQUFDdEQ7V0FBQSxBQUFPLFNBQVMsWUFBQTthQUFNLFFBQUEsQUFBUSxJQUFkLEFBQU0sQUFBWTtBQUFsQyxBQUNBO1dBQUEsQUFBTyxZQUFZLGVBQUE7YUFBTyxRQUFQLEFBQU8sQUFBUTtBQUFsQyxBQUNBO1dBQU8sWUFBQTthQUFNLE9BQU4sQUFBTSxBQUFPO0FBQXBCLEFBQ0Q7QUFKcUIsQUFBVSxHQUFBO0FBQWhDOztBQU1BLFNBQUEsQUFBVSxrQkFBVjs2Q0FBQTs7d0VBQUE7Y0FBQTt1Q0FBQTthQUNRO0FBRFIsbUJBQ2lCLElBQUEsQUFBSSxVQURyQixBQUNpQixBQUFjOzBCQUQvQjtpQkFFOEIsbUJBQUEsQUFBSyxlQUZuQyxBQUU4QixBQUFvQjs7YUFBMUM7QUFGUixtQ0FBQTs7YUFBQTtlQUFBLEFBR1MsSUFIVDs0QkFBQTtBQUFBO0FBQUE7OzBCQUFBOztzQkFLZ0IsbUJBRDhCLEFBQzlCLEFBQUssQUFDZjtzQkFBVSxtQkFOaEIsQUFJeUMsQUFBSyxBQUU5QixBQUFLO0FBRnlCLEFBQ3hDLFdBRG1DOzthQUp6QzswQkFJWTtBQUpaLDBCQUFBLEFBSVksQUFBVTtBQUp0QiwwQkFBQSxBQUlzQixBQUlsQjs7a0JBQUEsQUFBUSxJQVJaLEFBUUksQUFBWTs7ZUFSaEIsQUFTUSxVQVRSOzRCQUFBO0FBQUE7QUFVTTs7a0JBQUEsQUFBUSxJQUFSLEFBQVksWUFWbEIsQUFVTSxBQUF3QjswQkFWOUI7aUJBV1ksa0JBQUksS0FBQSxBQUFLLE1BQU0sU0FYM0IsQUFXWSxBQUFJLEFBQW9COzthQVhwQzswQkFBQTtBQUFBOzthQWFNO2tCQUFBLEFBQVEsSUFBUixBQUFZLFNBQVMsU0FBckIsQUFBOEIsQUFDOUI7aUJBQUEsQUFBTyxLQUFLLHlCQUFlLFNBZGpDLEFBY00sQUFBWSxBQUF3Qjs7YUFkMUM7MEJBQUE7QUFBQTs7YUFBQTthQUFBOzBCQUFBOztBQUFBO2NBQUE7QUFtQkE7O0FBQWUsU0FBQSxBQUFVLFFBQVY7K0RBQUE7Y0FBQTt5Q0FBQTthQUFBOzJCQUFBO2lCQUNQLENBRE8sQUFDUCxBQUNKOzthQUZXO2FBQUE7MkJBQUE7O0FBQUE7ZUFBQSIsImZpbGUiOiJzYWdhcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbm9haGNhcmRvemEvcHJvamVjdHMvY2hpdGNoYXQifQ==