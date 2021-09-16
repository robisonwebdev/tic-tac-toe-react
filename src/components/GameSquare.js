import React from 'react';
import '../styles/GameSquare.css';

const GameSquare = ({ onClick, id, value }) => {
    return (
        <div className='gameSquare' onClick={() => onClick(id)} squareID={id}>
            {value}
        </div>
    );
}

export default GameSquare;