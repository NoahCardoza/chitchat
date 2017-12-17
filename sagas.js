import { take, put, call, race } from 'redux-saga/effects'
import { eventChannel } from 'redux-saga'

const watchMessages = socket => eventChannel(emitter => {
  socket.onopen = () => console.log("WS: Connection.");
  socket.onmessage = msg => emitter(msg);
  return () => socket.close();
})

function* watchWebSockets() {
  const socket = new WebSocket('ws://127.0.0.1:1337');
  const socketChannel = yield call(watchMessages, socket);
  while (42) {
    const { incoming, outgoing } = yield race({
      incoming: take(socketChannel),
      outgoing: take('WS_SEND')
    });
    console.log("Something!!");
    if (incoming){
      console.log('Message:', incoming);
      yield put(JSON.parse(incoming.data));
    } else {
      console.log('Send:', outgoing.msg);
      socket.send(JSON.stringify(outgoing.msg));
    }
  }
}

export default function* Sagas(){
  yield [
    watchWebSockets(),
  ];
}
