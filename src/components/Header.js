import React from 'react';
import PlayerDisplay from './PlayerDisplay';
import '../styles/Header.css';

const Header = () => {
    return (
        <div className='header'>
            <PlayerDisplay player='X' />
            <div>2</div>
            <PlayerDisplay player='O' />
        </div>
    );
}

export default Header;