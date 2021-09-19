import React from 'react';
import '../styles/PlayerDisplay.css';

const PlayerDisplay = ({ currentPlayer, player, position }) => {
    return (
        <div className={`playerDisplay ${currentPlayer ? `${position}Highlight` : ''} ${position}`}>
            <p>{player}</p>
        </div>
    );
}

export default PlayerDisplay;