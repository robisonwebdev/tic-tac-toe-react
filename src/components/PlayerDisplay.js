import React from 'react';
import '../styles/PlayerDisplay.css';

const PlayerDisplay = ({ currentPlayer, player, position }) => {
    return (
        <div className={`playerDisplay ${currentPlayer ? 'highlight' : ''} ${position}`}>
            <h1>{player}</h1>
        </div>
    );
}

export default PlayerDisplay;