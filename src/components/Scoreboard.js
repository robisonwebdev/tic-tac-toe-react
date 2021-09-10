import React from 'react';

const Scoreboard = ({ gameWinner, playerOne, playerTwo }) => {
    return (
        <div className='scoreboard'>
            <div className='scores'>
                <p>{playerOne} | {playerTwo}</p>
            </div>
            <p>{gameWinner}</p>
        </div>
    );
}

export default Scoreboard;