import React from 'react';
import Button from './Button';

const GameReset = ({ setPlayerOne, setPlayerTwo, setShowForm, setShowGameReset }) => {
    const handlePlayAgain = () => {
        setShowForm(true);
        setShowGameReset(false);
    }

    const handleQuit = () => {
        setShowForm(true);
        setShowGameReset(false)
    }

    return (
        <div className='gameReset'>
            <Button text='Play Again' onClick={handlePlayAgain} />
            <Button text='Quit' onClick={handleQuit} />
        </div>
    );
}

export default GameReset;