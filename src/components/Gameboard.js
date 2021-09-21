import React, { useEffect } from 'react';
import GameSquare from './GameSquare';
import '../styles/Gameboard.css';

const Gameboard = ({ boardData, currentPlayer, gameOver, setBoardData, setCurrentPlayer, startGame }) => {
    useEffect(() => {
        checkForWinner();
    }, [boardData]);

    const checkForWinner = () => {
        const combos = [
            [boardData[0].value, boardData[1].value, boardData[2].value],
            [boardData[3].value, boardData[4].value, boardData[5].value],
            [boardData[6].value, boardData[7].value, boardData[8].value],
            [boardData[0].value, boardData[3].value, boardData[6].value],
            [boardData[1].value, boardData[4].value, boardData[7].value],
            [boardData[2].value, boardData[5].value, boardData[8].value],
            [boardData[0].value, boardData[4].value, boardData[8].value],
            [boardData[2].value, boardData[4].value, boardData[6].value],
        ];

        combos.forEach(square => {
            let valueOne = square[0];
            let valueTwo = square[1];
            let valueThree = square[2];

            if (valueOne !== null && valueOne === valueTwo && valueTwo === valueThree) {
                gameOver(valueOne);
            } else if (checkForTieGame()) {
                gameOver(null);
            }
        })
    }

    const checkForTieGame = () => {
        const areSquaresFilled = boardData.every(square => square.value !== null);

        return areSquaresFilled;
    }

    const placeMarker = (id, value) => {
        if (value === null) {
            let updateValue = boardData.map(square => {
                if (square.id === id) {
                    return {...square, value: currentPlayer ? 'X' : 'O'};
                }
                return square;
            })
    
            setBoardData(updateValue);
            setCurrentPlayer(!currentPlayer);
        }
    };

    const buildSquares = boardData.map(square => {
        if (startGame) {
            return <GameSquare key={square.id} onClick={placeMarker} id={square.id} value={square.value} />
        } else {
            return <GameSquare key={square.id} value={square.value} />;
        };
    });

    return (
        <div className='gameboard'>
            {buildSquares}
        </div>
    );
}

export default Gameboard;