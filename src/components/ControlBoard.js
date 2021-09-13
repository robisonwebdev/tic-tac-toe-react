import React, { useState } from 'react';
import GameForm from './GameForm';
import '../styles/ControlBoard.css';

const ControlBoard = ({ playerOne, playerTwo, setPlayerOne, setPlayerTwo }) => {
    const [showForm, setShowForm] = useState(true);

    return (
        <div className='controlBoard'>
            {showForm 
                ?   <GameForm 
                        playerOne={playerOne}
                        playerTwo={playerTwo}
                        setPlayerOne={setPlayerOne}
                        setPlayerTwo={setPlayerTwo}
                    />
                :   null
            }
        </div>
    );
}

export default ControlBoard;