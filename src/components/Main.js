import React, { useState } from 'react';
import Gameboard from './Gameboard';
import ControlBoard from './ControlBoard';
import squareData from '../squareData';
import '../styles/Main.css';

const Main = ({ currentPlayer, playerOne, playerTwo, setCurrentPlayer, setGameWinner, setPlayerOne, setPlayerTwo }) => {
    const [boardData, setBoardData] = useState(squareData);
    const [startGame, setStartGame] = useState(false);

    const gameOver = (value) => {
        if (value === 'X') {
            setGameWinner(`${playerOne} Wins!`);
        } else if (value === 'O') {
            setGameWinner(`${playerTwo} Wins!`);
        }
    }

    const resetBoardData = () => {
        setBoardData(squareData);
    }

    return (
        <main>
            <h1 className='gameTitle'>Tic-Tac-Toe</h1>
            <Gameboard
                boardData={boardData}
                currentPlayer={currentPlayer}
                setBoardData={setBoardData}
                setCurrentPlayer={setCurrentPlayer}
                gameOver={gameOver}
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