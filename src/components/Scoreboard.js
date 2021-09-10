import React from 'react';

const Scoreboard = ({ gameWinner }) => {
    return (
        <div className='scoreboard'>
            <div>score</div>
            <p>{gameWinner}</p>
        </div>
    );
}

export default Scoreboard;