import Head from 'next/head';
import { createElement as $ } from 'react';
import { Provider, connect} from 'react-redux';
import makeStore from '../store.js';

let Messages = ({ messages }) =>
  $('div', { className: 'messages' },
    messages.map((msg, key) => $('div', { key }, msg)));

const mapStateMessagesProps = ({ messages }) => {
  return { messages };
}

Messages = connect(mapStateMessagesProps)(Messages);

let Input = ({ dispatch }) => {
  return (
    $('form', {
      action:'javascript:',
      onSubmit: () => {
        dispatch({
          type: 'WS_SEND',
          msg: {
            type: 'NEW_MESSAGE',
            msg: msgInput.value
          }
        });
        msgInput.value = '';
      }
    },
      $('input', {
        id: 'msgInput',
        placeholder: 'Type your heart out!',
      }))
  )
}

Input = connect()(Input);

const App = ({ state }) =>
  $(Provider, {store: makeStore()},
    $('div', { className: 'chitchat' },
      $(Head, null,
        $('title', null, 'Chat-Chat'),
        $('meta', {name: 'viewport', content:'initial-scale=1.0, width=device-width'})),
      $(Messages),
      $(Input)));

export default App;
