import React from 'react';

const PlayerDisplay = ({ currentPlayer, player }) => {
    return (
        <div className={`playerDisplay ${currentPlayer ? 'highlight' : ''}`}>
            <h1>{player}</h1>
        </div>
    );
}

export default PlayerDisplay;