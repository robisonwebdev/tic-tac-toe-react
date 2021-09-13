import React from 'react';
import Gameboard from './Gameboard';
import ControlBoard from './ControlBoard';
import '../styles/Main.css';

const Main = ({ playerOne, playerTwo, setPlayerOne, setPlayerTwo }) => {
    return (
        <main>
            <h1>Tic-Tac-Toe</h1>
            <Gameboard />
            <ControlBoard
                playerOne={playerOne}
                playerTwo={playerTwo}
                setPlayerOne={setPlayerOne}
                setPlayerTwo={setPlayerTwo}
            />
        </main>
    );
}

export default Main;