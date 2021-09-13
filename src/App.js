import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './styles/App.css';

const App = () => {
  const [playerOne, setPlayerOne] = useState('');
  const [playerTwo, setPlayerTwo] = useState('');

  return (
    <div className='app'>
      <Header />
      <Main
        playerOne={playerOne}
        playerTwo={playerTwo}
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