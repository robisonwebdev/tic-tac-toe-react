import React, { useState } from 'react';
import Gameboard from './Gameboard';
import ControlBoard from './ControlBoard';
import '../styles/Main.css';

const Main = ({ playerOne, playerTwo, setPlayerOne, setPlayerTwo }) => {
    const [startGame, setStartGame] = useState(false);

    return (
        <main>
            <h1>Tic-Tac-Toe</h1>
            <Gameboard
                startGame={startGame}
            />
            <ControlBoard
                playerOne={playerOne}
                playerTwo={playerTwo}
                setPlayerOne={setPlayerOne}
                setPlayerTwo={setPlayerTwo}
                setStartGame={setStartGame}
            />
        </main>
    );
}

export default Main;