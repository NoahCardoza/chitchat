const wsServer = require('uws').Server;
const wss = new wsServer({ port: 1337 });

let counter = 0;

const messages = [];
const users = new Map();

const { parse, stringify } = JSON

const receiveMessage = (msg, senderUID) => {
  messages.push(msg);
  users.forEach(user =>
      user.send(stringify({
        type: 'NEW_MESSAGE',
        msg
      })));
}

const onConnection = ws => {
  const UID = counter++;
  users.set(UID, ws);

  console.log('Connection:', UID);
  ws.on('message', data => {
    const action = parse(data);
    switch (action.type) {
      case 'NEW_MESSAGE':
        receiveMessage(action.msg, UID);
    }
  });

  ws.send(stringify({
    type: 'SET_HISTORY',
    messages
  }));

  ws.on('close', () => {
    console.log('USER:', UID, 'Disconnected');
    users.delete(UID);
  });
}

wss.on('connection', onConnection);
