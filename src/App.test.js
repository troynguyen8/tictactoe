import React from 'react';
import ReactDOM from 'react-dom';
import TicTacToeApp from './TicTacToeApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TicTacToeApp />, div);
});
