import React from 'react';
import FormInput from './FormInput';
import Button from './Button';
import '../styles/ControlBoard.css';

const ControlBoard = () => {
    return (
        <div className='controlBoard'>
            <form>
                <FormInput className='playerLabel' labelText='Player X' placeholder='Enter Player 1' type='text' />
                <FormInput className='playerLabel' labelText='Player O' placeholder='Enter Player 2' type='text' />
                <Button text='Start!' type='submit' />
            </form>
        </div>
    );
}

export default ControlBoard;