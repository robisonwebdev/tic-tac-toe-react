import React, { useState } from 'react';
import GameForm from './GameForm';
import GameReset from './GameReset';
import '../styles/ControlBoard.css';

const ControlBoard = ({ playerOne, playerTwo, resetBoardData, setPlayerOne, setPlayerTwo, setStartGame }) => {
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
                        setStartGame={setStartGame}
                    />
                :   null
            }
            {showGameReset
                ?   <GameReset
                        resetBoardData={resetBoardData}
                        setPlayerOne={setPlayerOne}
                        setPlayerTwo={setPlayerTwo}
                        setShowForm={setShowForm}
                        setShowGameReset={setShowGameReset}
                        setStartGame={setStartGame}
                    />
                :   null
            }
        </div>
    );
}

export default ControlBoard;