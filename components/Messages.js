import { createElement as $ } from 'react';
import { connect } from 'react-redux';

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

export default Messages;
