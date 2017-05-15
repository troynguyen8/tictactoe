import React from 'react';
import PropTypes from 'prop-types';

function TicTacToeReplayButton(props) {
      return (
            <button
                  className="replay-button btn btn--primary"
                  onClick={props.handleReplay}>
            play again?
            </button>
      );
}

ReplayButton.propTypes = {
      handleReplay: PropTypes.func.isRequired
}

export default TicTacToeReplayButton;