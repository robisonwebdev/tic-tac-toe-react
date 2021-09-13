import React from 'react';
import FormInput from './FormInput';
import Button from './Button';
import '../styles/ControlBoard.css';

const ControlBoard = ({ playerOne, playerTwo, setPlayerOne, setPlayerTwo }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div className='controlBoard'>
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
        </div>
    );
}

export default ControlBoard;