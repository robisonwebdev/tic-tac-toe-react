import React from 'react';
import PlayerDisplay from './PlayerDisplay';
import Scoreboard from './Scoreboard';
import '../styles/Header.css';

const Header = () => {
    return (
        <div className='header'>
            <PlayerDisplay player='X' />
            <Scoreboard gameWinner='X Wins!' playerOne='5' playerTwo='4' />
            <PlayerDisplay player='O' />
        </div>
    );
}

export default Header;