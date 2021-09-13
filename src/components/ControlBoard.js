import React from 'react';
import FormInput from './FormInput';
import Button from './Button';
import '../styles/ControlBoard.css';

const ControlBoard = ({ playerOne, playerTwo, setPlayerOne, setPlayerTwo }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submit Clicked!');
    }

    return (
        <div className='controlBoard'>
            <form onSubmit={handleSubmit}>
                <FormInput
                    className='playerLabel'
                    labelText='Player X'
                    onChange={setPlayerOne}
                    placeholder='Enter Player 1'
                    type='text'
                    value={playerOne}
                />
                <FormInput
                    className='playerLabel'
                    labelText='Player O'
                    onChange={setPlayerTwo}
                    placeholder='Enter Player 2'
                    type='text'
                    value={playerTwo}
                />
                <Button text='Start!' type='submit' />
            </form>
        </div>
    );
}

export default ControlBoard;