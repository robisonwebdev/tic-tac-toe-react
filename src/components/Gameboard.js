import React, { useState } from 'react';
import GameSquare from './GameSquare';
import '../styles/Gameboard.css';

const Gameboard = ({ startGame }) => {

    const placeMarker = (id, value) => {
        if (value === null) {
            let updateValue = boardData.map(square => {
                if (square.id === id) {
                    return {...square, value: 'B'};
                }
                return square;
            })
    
            setBoardData(updateValue);
        }
    }

    const buildSquares = boardData.map(square => {
        if (startGame) {
            return <GameSquare key={square.id} onClick={placeMarker} id={square.id} value={square.value} />
        } else {
            return <GameSquare key={square.id} />;
        };
    })

    return (
        <div className='gameboard'>
            {buildSquares}
        </div>
    );
}

export default Gameboard;