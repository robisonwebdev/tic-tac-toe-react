import React from 'react';

const Scoreboard = ({ gameWinner, playerOneScore, playerTwoScore }) => {
    return (
        <div className='scoreboard'>
            <div className='scores'>
                <p>{playerOneScore} | {playerTwoScore}</p>
            </div>
            <p>{gameWinner}</p>
        </div>
    );
}

export default Scoreboard;