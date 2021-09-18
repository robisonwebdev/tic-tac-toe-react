import React from 'react';
import PlayerDisplay from './PlayerDisplay';
import Scoreboard from './Scoreboard';
import '../styles/Header.css';

const Header = ({ currentPlayer, playerOneScore, playerTwoScore }) => {
    return (
        <header>
            <PlayerDisplay
                currentPlayer={currentPlayer}
                player='X'
                position='left'
            />
            <Scoreboard
                gameWinner='X Wins!'
                playerOneScore={playerOneScore}
                playerTwoScore={playerTwoScore}
            />
            <PlayerDisplay
                currentPlayer={!currentPlayer}
                player='O'
                position='right'
            />
        </header>
    );
}

export default Header;