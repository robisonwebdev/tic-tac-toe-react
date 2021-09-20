import React, { useEffect } from 'react';
import GameSquare from './GameSquare';
import '../styles/Gameboard.css';

const Gameboard = ({ boardData, currentPlayer, setBoardData, setCurrentPlayer, startGame }) => {
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
            return <GameSquare key={square.id} />;
        };
    });

    return (
        <div className='gameboard'>
            {buildSquares}
        </div>
    );
}

export default Gameboard;