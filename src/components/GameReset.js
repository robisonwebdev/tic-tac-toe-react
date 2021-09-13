import React from 'react';
import Button from './Button';

const GameReset = () => {
    return (
        <div className='gameReset'>
            <Button text='Play Again' />
            <Button text='Quit' />
        </div>
    );
}

export default GameReset;