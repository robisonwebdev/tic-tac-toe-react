import React from 'react';
import Button from './Button';

const GameReset = ({ resetBoardData, resetScores, setGameWinner, setPlayerOne, setPlayerTwo, setShowForm, setShowGameReset, setStartGame }) => {
    const handlePlayAgain = () => {
        setGameWinner('');
        setStartGame(true);
        resetBoardData();
    }

    const handleQuit = () => {
        resetBoardData();
        resetScores();
        setGameWinner('')
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