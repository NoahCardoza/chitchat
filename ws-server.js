const wsServer = require('uws').Server;
const wss = new wsServer({ port: 1337 });

let counter = 0;

const SystemMessage = message => {
  return {
    uid: -1,
    username: 'System',
    message
  }
};


const MESSAGES = [];
const USERS = new Map();

const { parse, stringify } = JSON

const receiveMessage = (message) => {
  MESSAGES.push({...message, type: undefined});
  USERS.forEach(user =>
      user.send(stringify(message)));
}

const onConnection = ws => {
  const UID = counter++;
  USERS.set(UID, ws);

  console.log('Connection:', UID);
  ws.on('message', data => {
    const action = parse(data);
    console.log(action);
    switch (action.type) {
      case 'NEW_MESSAGE':
        console.log("New message from", ws.username);
        receiveMessage({
          ...action,
          uid: UID,
          username: ws.username
        });
        break;
      case 'SET_USERNAME':
        ws.username = action.username;
        ws.send(
          stringify({
            type: 'SET_USERNAME',
            username: action.username
        }))
        ws.send(stringify({
          type: 'SET_HISTORY',
          messages: [...MESSAGES, SystemMessage(`Welcome ${action.username}`)],
        }));
        break;
    }
  });


  ws.on('close', () => {
    console.log('USER:', UID, 'Disconnected');
    USERS.delete(UID);
  });
}

wss.on('connection', onConnection);
