import React, { useState } from 'react';
import GameForm from './GameForm';
import GameReset from './GameReset';
import '../styles/ControlBoard.css';

const ControlBoard = ({ playerOne, playerTwo, setPlayerOne, setPlayerTwo }) => {
    const [showForm, setShowForm] = useState(true);
    const [showGameReset, setShowGameReset] = useState(false);

    return (
        <div className='controlBoard'>
            {showForm 
                ?   <GameForm 
                        playerOne={playerOne}
                        playerTwo={playerTwo}
                        setPlayerOne={setPlayerOne}
                        setPlayerTwo={setPlayerTwo}
                        setShowForm={setShowForm}
                        setShowGameReset={setShowGameReset}
                    />
                :   null
            }
            {showGameReset
                ?   <GameReset
                        setShowForm={setShowForm}
                        setShowGameReset={setShowGameReset}
                    />
                :   null
            }
        </div>
    );
}

export default ControlBoard;