import React from 'react';
import Gameboard from './Gameboard';
import ControlBoard from './ControlBoard';
import '../styles/Main.css';

const Main = () => {
    return (
        <main>
            <h1>Tic-Tac-Toe</h1>
            <Gameboard />
            <ControlBoard />
        </main>
    );
}

export default Main;