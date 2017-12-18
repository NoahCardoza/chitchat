import { createElement as $ } from 'react';
import { MsgInput, UsernameInput } from './Inputs.js';
import Messages from './Messages.js';

const Room = () => $('div', null, $(Messages), $(MsgInput));

const Welcome = () => $('div', null, $('div', null, 'Welcome! Choose a username!'), $(UsernameInput));

export { Welcome, Room }
