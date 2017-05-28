import React, { Component } from 'react';
import './TicTacToeApp.css';
import '../node_modules/@dmsi/wedgekit/wedgekit.css'
import TicTacToeSquare from './TicTacToeSquare.js';
import TicTacToeReplayButton from './TicTacToeReplayButton.js';
import TicTacToeHeader from './TicTacToeHeader.js';

class TicTacToeApp extends Component {
      constructor(props) {
            super(props);

            this.state = {
                  playerTurn: 'X',
                  board: [
                        {character: '', id: 0},
                        {character: '', id: 1},
                        {character: '', id: 2},
                        {character: '', id: 3},
                        {character: '', id: 4},
                        {character: '', id: 5},
                        {character: '', id: 6},
                        {character: '', id: 7},
                        {character: '', id: 8}
                  ],
                  win: false,
                  tie: false
            }

            this.calculateWin = () => {
                  const winCases = [
            		[0,1,2],
            		[3,4,5],
            		[6,7,8],
            		[0,3,6],
            		[1,4,7],
            		[2,5,8],
            		[0,4,8],
            		[2,4,6]
            	];

                  for(let i = 0; i < winCases.length; i++) {
                        const winCase = winCases[i];
                        var char1 = this.state.board[winCase[0]].character;
                        var char2 = this.state.board[winCase[1]].character;
                        var char3 = this.state.board[winCase[2]].character;

                        if(char1 && char2 && char3) {
                              if(char1 === char2 && char1 === char3 && char2 === char3) {
                                    this.setState({win: true});
                                    return true;
                              }
                        }
                  }
                  
                  return false;
            }

            this.checkTie = () => {
                  const allSquaresFilled = this.state.board.every( (square) => square.character !== '');
                  
                  if(!this.calculateWin() && allSquaresFilled) {
                        this.setState( {tie: true} );
                  }
            }

            this.handleClick = (key) => {
                  var tempArr = [...this.state.board];

                  tempArr[key].character = this.state.playerTurn;

                  this.setState({board: tempArr});

                  this.setState((prevState) => {
                        return {
                              playerTurn: (prevState.playerTurn === 'X') ? 'O' : 'X'
                        }
                  });

                  this.checkTie();
            }

            this.renderSquare = (square) => {
                  return (
                        <TicTacToeSquare
                              character={square.character}
                              handleClick={this.handleClick}
                              key={square.id}
                              id={square.id}
                              win={this.state.win}
                        />
                  )
            }

            this.renderRows = (squares) => {
                  return (
                        <div className="board">
                              <div className="row1">
                                    {squares[0]}
                                    {squares[1]}
                                    {squares[2]}
                              </div>

                              <div className="row2">
                                    {squares[3]}
                                    {squares[4]}
                                    {squares[5]}
                              </div>

                              <div className="row3">
                                    {squares[6]}
                                    {squares[7]}
                                    {squares[8]}
                              </div>
                        </div>
                  );
            }

            this.handleReplay = () => {
                  var tempArr = [...this.state.board];

                  tempArr.forEach((square) => {
                        square.character = '';
                  });

                  this.setState({
                        playerTurn: 'X',
                        board: tempArr,
                        win: false,
                        tie: false
                  });
            }
      }

      render() {
            return (
                  <div className="game">
                        <TicTacToeHeader />

                        {this.renderRows( this.state.board.map((square) => this.renderSquare(square)) )}

                        <div className="player-turn">
                              {!(this.state.tie || this.state.win) ? `Player Turn: ${this.state.playerTurn}` : ''}
                        </div>

                        <div className="win-message">
                              {(this.state.win) ? `Player ${(this.state.playerTurn === 'X') ? 'O' : 'X'} is the winner!` : ''}
                        </div>

                        <div className="tie-message">
                              {(this.state.tie) ? 'It\'s a tie!' : ''}
                        </div>

                        <div className="replay-button">
                              {(this.state.win || this.state.tie) ? <TicTacToeReplayButton handleReplay={this.handleReplay}/> : ''}
                        </div>
                  </div>
            );
      }
}

export default TicTacToeApp;
