import React from 'react';

function PlayAgainComponent(props) {
    return (
        <div className="game-done">
            <div 
                className="message"
                style={{ color: props.gameStatus === 'lost' ? 'red' : 'green'}}
            >
                {props.gameStatus === 'lost' ? 'Game Over' : 'Nice'}
            </div>
            <button className="playAgain" onClick={props.onClick}>Play Again</button>
        </div>
    );
}

export default PlayAgainComponent;