import React from 'react';
import '../styles/GameSquare.css';

const GameSquare = ({ onClick, id, value }) => {
    const handleClick = () => {
        if (onClick === undefined) {
            return null;
        } else {
            return onClick(id, value);
        }
    }
    return (
        <div className='gameSquare' onClick={handleClick} square_id={id}>
            {value}
        </div>
    );
}

export default GameSquare;