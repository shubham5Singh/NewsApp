import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { connect } from 'react-redux';
import store from '.../store'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
