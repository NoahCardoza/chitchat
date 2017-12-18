import Head from 'next/head';
import { createElement as $ } from 'react';
import { Provider, connect} from 'react-redux';
import nextConnect from '../store.js';

let Messages = ({ messages }) =>
  $('div', { className: 'messages' },
    messages.map((entry, key) =>
    $('div', { key },
      $('b', null, entry.username + ': '),
      entry.message)));

const mapStateMessagesProps = ({ messages }) => {
  return { messages };
}

Messages = connect(mapStateMessagesProps)(Messages);

let Input = ({ dispatch, placeholder, onSubmit }) => {
  let input;
  return (
    $('form', {
      autoFocus: true,
      action:'javascript:',
      onSubmit: () => onSubmit(input)
    },
      $('input', {
        ref: node => input = node,
        placeholder
      }))
  )
}

const mapDispatchToMsgInputProps = dispatch => {
  return {
    placeholder: 'Type your heart out!',
    onSubmit: input => {
      dispatch({
        type: 'WS_SEND',
        data: {
          type: 'NEW_MESSAGE',
          message: input.value
        }
      });
      input.value = '';
    }
  };
}

const mapDispatchToUsernameInputProps = dispatch => {
  return {
    placeholder: 'What would you like to be feared by?',
    onSubmit: input => {
      dispatch({
        type: 'WS_SEND',
        data: {
          type: 'SET_USERNAME',
          username: input.value
        }
      });
      input.value = '';
    }
  };
}


const MsgInput = connect(null, mapDispatchToMsgInputProps)(Input);
const UsernameInput = connect(null, mapDispatchToUsernameInputProps)(Input);

Input = connect()(Input);

const Room = () => [$(Messages), $(MsgInput)];
const Welcome = () => [$('div', null, 'Welcome! Choose a username!'), $(UsernameInput)];

const App = ({ username }) => {
  console.log(username);
  return (
  $('div', { className: 'chitchat' },
    $(Head, null,
      $('title', null, 'Chat-Chat'),
      $('meta', {name: 'viewport', content:'initial-scale=1.0, width=device-width'})),
    (username
      ? Room()
      : Welcome()))
    )}

const mapStateToAppProps = ({ username }) => {
  return { username }
};

export default nextConnect(connect(mapStateToAppProps)(App));
