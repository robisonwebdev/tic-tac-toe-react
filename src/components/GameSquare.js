import React from 'react';
import '../styles/GameSquare.css';

const GameSquare = ({ squareValue }) => {
    return (
        <div className='gameSquare'>
            {squareValue}
        </div>
    );
}

export default GameSquare;