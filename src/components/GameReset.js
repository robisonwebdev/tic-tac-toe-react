import React from 'react';
import Button from './Button';

const GameReset = ({ setShowForm, setShowGameReset }) => {
    const handlePlayAgain = () => {
        setShowForm(true);
        setShowGameReset(false);
    }

    return (
        <div className='gameReset'>
            <Button text='Play Again' onClick={handlePlayAgain} />
            <Button text='Quit' />
        </div>
    );
}

export default GameReset;