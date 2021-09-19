import React from 'react';
import '../styles/Scoreboard.css';

const Scoreboard = ({ gameWinner, playerOneScore, playerTwoScore }) => {
    return (
        <div className='scoreboard'>
            <div className='scores'>
                <h3>{playerOneScore} | {playerTwoScore}</h3>
            </div>
            <p className='gameWinnerText'>{gameWinner}</p>
        </div>
    );
}

export default Scoreboard;