import React, { useEffect, useState } from 'react';
import Gameboard from './Gameboard';
import ControlBoard from './ControlBoard';
import squareData from '../squareData';
import '../styles/Main.css';

const Main = ({ playerOne, playerTwo, setPlayerOne, setPlayerTwo }) => {
    const [boardData, setBoardData] = useState(squareData);
    const [currentPlayer, setCurrentPlayer] = useState(true);
    const [startGame, setStartGame] = useState(false);

    // useEffect(() => {
    //     console.log('Data Changed');
    // }, [boardData])

    const resetBoardData = () => {
        setBoardData(squareData);
    }

    return (
        <main>
            <h1>Tic-Tac-Toe</h1>
            <Gameboard
                boardData={boardData}
                currentPlayer={currentPlayer}
                setBoardData={setBoardData}
                setCurrentPlayer={setCurrentPlayer}
                startGame={startGame}
            />
            <ControlBoard
                playerOne={playerOne}
                playerTwo={playerTwo}
                resetBoardData={resetBoardData}
                setPlayerOne={setPlayerOne}
                setPlayerTwo={setPlayerTwo}
                setStartGame={setStartGame}
            />
        </main>
    );
}

export default Main;