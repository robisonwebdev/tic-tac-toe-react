import React from 'react';
import Button from './Button';

const GameReset = ({ setPlayerOne, setPlayerTwo, setShowForm, setShowGameReset, setStartGame }) => {
    const handlePlayAgain = () => {
        setShowForm(true);
        setShowGameReset(false);
    }

    const handleQuit = () => {
        setPlayerOne('');
        setPlayerTwo('');
        setShowForm(true);
        setShowGameReset(false);
        setStartGame(false);
    }

    return (
        <div className='gameReset'>
            <Button text='Play Again' onClick={handlePlayAgain} />
            <Button text='Quit' onClick={handleQuit} />
        </div>
    );
}

export default GameReset;