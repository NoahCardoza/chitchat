import Head from 'next/head';
import { createElement as $ } from 'react';
import { Welcome, Room } from './views.js';
import { connect } from 'react-redux';

const App = ({ username }) => {
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

export default connect(mapStateToAppProps)(App);
