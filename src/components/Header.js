import React from 'react';
import PlayerDisplay from './PlayerDisplay';
import Scoreboard from './Scoreboard';
import '../styles/Header.css';

const Header = () => {
    return (
        <header>
            <PlayerDisplay player='X' />
            <Scoreboard gameWinner='X Wins!' playerOneScore='5' playerTwoScore='4' />
            <PlayerDisplay player='O' />
        </header>
    );
}

export default Header;