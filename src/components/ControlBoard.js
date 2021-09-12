import React from 'react';
import FormInput from './FormInput';

const ControlBoard = () => {
    return (
        <div className='controlBoard'>
            <form>
                <FormInput labelText='Player X' placeholder='Enter Player 1' type='text' />
                <FormInput labelText='Player O' placeholder='Enter Player 2' type='text' />
            </form>
        </div>
    );
}

export default ControlBoard;