import React from 'react';
import PlayerDisplay from './PlayerDisplay';
import Scoreboard from './Scoreboard';
import '../styles/Header.css';

const Header = () => {
    return (
        <div className='header'>
            <PlayerDisplay player='X' />
            <Scoreboard />
            <PlayerDisplay player='O' />
        </div>
    );
}

export default Header;