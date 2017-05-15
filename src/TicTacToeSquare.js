import React from 'react';
import PropTypes from 'prop-types';

function TicTacToeSquare(props) {
      return (
            <div className={'square' + props.id}>
                  <button
                        className="square"
                        disabled={(props.character || props.win) ? true : false}
                        onClick={(e) => props.handleClick(props.id)}>
                        {props.character}
                  </button>
            </div>
      );
}

Square.propTypes = {
      character: PropTypes.string,
      handleClick: PropTypes.func.isRequired,
      id: PropTypes.number.isRequired,
      win: PropTypes.bool.isRequired
};

export default TicTacToeSquare;