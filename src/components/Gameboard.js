import React from 'react';
import GameSquare from './GameSquare';
import '../styles/Gameboard.css';

const Gameboard = ({ boardData, currentPlayer, setBoardData, setCurrentPlayer, startGame }) => {
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