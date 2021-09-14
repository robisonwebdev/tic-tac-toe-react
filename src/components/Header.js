import React from 'react';
import PlayerDisplay from './PlayerDisplay';
import Scoreboard from './Scoreboard';
import '../styles/Header.css';

const Header = ({ playerOneScore, playerTwoScore }) => {
    return (
        <header>
            <PlayerDisplay player='X' />
            <Scoreboard
                gameWinner='X Wins!'
                playerOneScore={playerOneScore}
                playerTwoScore={playerTwoScore}
            />
            <PlayerDisplay player='O' />
        </header>
    );
}

export default Header;