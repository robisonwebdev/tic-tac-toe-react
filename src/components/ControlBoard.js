import React from 'react';
import FormInput from './FormInput';
import '../styles/ControlBoard.css';

const ControlBoard = () => {
    return (
        <div className='controlBoard'>
            <form>
                <FormInput className='playerLabel' labelText='Player X' placeholder='Enter Player 1' type='text' />
                <FormInput className='playerLabel' labelText='Player O' placeholder='Enter Player 2' type='text' />
            </form>
        </div>
    );
}

export default ControlBoard;