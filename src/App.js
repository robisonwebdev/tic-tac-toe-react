import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './styles/App.css';

const App = () => {
  const [currentPlayer, setCurrentPlayer] = useState(true);
  const [gameWinner, setGameWinner] = useState('');
  const [playerOne, setPlayerOne] = useState('');
  const [playerTwo, setPlayerTwo] = useState('');
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);

  return (
    <div className='app'>
      <Header
        currentPlayer={currentPlayer}
        gameWinner={gameWinner}
        playerOneScore={playerOneScore}
        playerTwoScore={playerTwoScore}
      />
      <Main
        currentPlayer={currentPlayer}
        playerOne={playerOne}
        playerTwo={playerTwo}
        setCurrentPlayer={setCurrentPlayer}
        setPlayerOne={setPlayerOne}
        setPlayerTwo={setPlayerTwo}
      />
      <Footer
        address='https://github.com/robisonwebdev'
        name='David Robison'
        text='Developed by '
      />
    </div>
  );
}

export default App;