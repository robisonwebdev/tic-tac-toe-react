import React from 'react';
import FormInput from './FormInput';
import Button from './Button';

const GameForm = ({ playerOne, playerTwo, setPlayerOne, setPlayerTwo, setShowForm, setShowGameReset }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        setShowForm(false);
        setShowGameReset(true);
    }

    return (
        <form onSubmit={handleSubmit}>
            <FormInput
                className='playerLabel'
                labelText='Player X'
                placeholder='Enter Player 1'
                setPlayer={setPlayerOne}
                type='text'
                value={playerOne}
            />
            <FormInput
                className='playerLabel'
                labelText='Player O'
                placeholder='Enter Player 2'
                setPlayer={setPlayerTwo}
                type='text'
                value={playerTwo}
            />
            <Button text='Start!' type='submit' />
    </form>
    );
}

export default GameForm;