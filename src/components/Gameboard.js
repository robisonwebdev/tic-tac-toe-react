import React from 'react';
import GameSquare from './GameSquare';
import '../styles/Gameboard.css';

const Gameboard = () => {
    return (
        <div className='gameboard'>
            <GameSquare />
        </div>
    );
}

export default Gameboard;