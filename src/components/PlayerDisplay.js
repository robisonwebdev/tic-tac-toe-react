import React from 'react';

const PlayerDisplay = ({ player }) => {
    return (
        <div className='playerDisplay'>
            <h1>{player}</h1>
        </div>
    );
}

export default PlayerDisplay;