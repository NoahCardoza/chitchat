import Head from 'next/head';
import { createElement as $ } from 'react';
import { Provider, connect} from 'react-redux';
import nextConnect from '../store.js';

let Messages = ({ messages }) =>
  $('div', { className: 'messages' },
    messages.map((msg, key) => $('div', { key }, msg)));

const mapStateMessagesProps = ({ messages }) => {
  return { messages };
}

Messages = connect(mapStateMessagesProps)(Messages);

let Input = ({ dispatch, placeholder, onSubmit }) => {
  let input;
  return (
    $('form', {
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
    placeholder: 'Fick!',
    onSubmit: input => {
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
}

const MsgInput = connect(null, mapDispatchToMsgInputProps)(Input);

Input = connect()(Input);

const Messenger = [$(Messages), $(Input, {
  placeholder: 'Type your heart out!'
})]

const App = () =>
  $('div', { className: 'chitchat' },
    $(Head, null,
      $('title', null, 'Chat-Chat'),
      $('meta', {name: 'viewport', content:'initial-scale=1.0, width=device-width'})),
    $(Messages),
    $(MsgInput));

export default nextConnect(App);
