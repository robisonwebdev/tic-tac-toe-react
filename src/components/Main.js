import React, { useState } from 'react';
import Gameboard from './Gameboard';
import ControlBoard from './ControlBoard';
import squareData from '../squareData';
import '../styles/Main.css';

const Main = ({ currentPlayer, playerOne, playerTwo, resetScores, setCurrentPlayer, setGameWinner, setPlayerOne, setPlayerTwo, updateScore }) => {
    const [boardData, setBoardData] = useState(squareData);
    const [startGame, setStartGame] = useState(false);

    const gameOver = (value) => {
        setStartGame(false);

        if (value === 'X') {
            setGameWinner(`${playerOne} Wins!`);
            updateScore(playerOne);
        } else if (value === 'O') {
            setGameWinner(`${playerTwo} Wins!`);
            updateScore(playerTwo);
        } else if (null) {
            setGameWinner('Tie game, no winners!');
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
                resetScores={resetScores}
                setGameWinner={setGameWinner}
                setPlayerOne={setPlayerOne}
                setPlayerTwo={setPlayerTwo}
                setStartGame={setStartGame}
            />
        </main>
    );
}

export default Main;