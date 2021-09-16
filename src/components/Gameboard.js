import React, { useState } from 'react';
import GameSquare from './GameSquare';
import squareData from '../squareData';
import '../styles/Gameboard.css';

const Gameboard = () => {
    const [boardData, setBoardData] = useState(squareData);

    const placeMarker = (id) => {
        let updateValue = boardData.map(square => {
            if (square.id === id) {
                return {...square, value: 'B'};
            }
            return square;
        })

        setBoardData(updateValue);
    }

    const buildSquares = boardData.map(square => {
        return <GameSquare key={square.id} onClick={placeMarker} id={square.id} value={square.value} />
    })

    return (
        <div className='gameboard'>
            {buildSquares}
        </div>
    );
}

export default Gameboard;