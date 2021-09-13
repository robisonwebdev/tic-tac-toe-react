import React, { useState } from 'react';
import GameForm from './GameForm';
import '../styles/ControlBoard.css';

const ControlBoard = ({ playerOne, playerTwo, setPlayerOne, setPlayerTwo }) => {
    const [showForm, setShowForm] = useState(true);

    return (
        <div className='controlBoard'>
            <GameForm 
                playerOne={playerOne}
                playerTwo={playerTwo}
                setPlayerOne={setPlayerOne}
                setPlayerTwo={setPlayerTwo}
            />
        </div>
    );
}

export default ControlBoard;