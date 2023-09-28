import React, { useState } from 'react';
import './App.css';
import PaperHandTransparent from './assets/moves/paper-hand-transparent.png';
import RockHandTransparent from './assets/moves/rock-hand-transparent.png';
import ScissorHandTransparent from './assets/moves/scissor-hand-transparent.png';

function App() {
  const [winner, setWinner] = useState('');
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [draws, setDraws] = useState(0);

  const possibleMoves = [
    {
      type: 'paper',
      label: 'Papel',
      wins: 'rock',
      loses: 'scissor',
    },
    {
      type: 'rock',
      label: 'Pedra',
      wins: 'scissor',
      loses: 'paper',
    },
    {
      type: 'scissor',
      label: 'Tesoura',
      wins: 'paper',
      loses: 'rock',
    },
  ];

  const makeMove = (playerMove) => {
    const minimumMachineMoveNumber = 1;
    const maximumMachineMoveNumber = 3;

    const randomMachineMove =
      Math.floor(
        Math.random() *
          (maximumMachineMoveNumber - minimumMachineMoveNumber + 1)
      ) + minimumMachineMoveNumber;

    const machineMoveType = possibleMoves[randomMachineMove - 1].type;

    if (machineMoveType === playerMove) {
      setWinner('Empate');
      setDraws(draws + 1);
    } else {
      const playerMoveValidation = possibleMoves.find(
        (currentMove) => currentMove.type === playerMove
      );

      if (playerMoveValidation.wins === machineMoveType) {
        setWinner('Jogador');
        setPlayerScore(playerScore + 1);
      } else {
        setWinner('Computador');
        setComputerScore(computerScore + 1);
      }
    }
  };

  const resetGame = () => {
    setWinner('');
    setPlayerScore(0);
    setComputerScore(0);
    setDraws(0);
  };

  return (
    <div className="App">
      <h1 id="emcima">Jogo Pedra-Papel-Tesoura</h1>
      {winner && (
        <div>
          <h2>Resultado: {winner}</h2>
          <button onClick={resetGame}>Jogar Novamente</button>
        </div>
      )}

      <div className="moves">
        <button onClick={() => makeMove('paper')}>
          <img src={PaperHandTransparent} alt="Papel" />
        </button>

        <button onClick={() => makeMove('rock')}>
          <img src={RockHandTransparent} alt="Pedra" />
        </button>

        <button onClick={() => makeMove('scissor')}>
          <img src={ScissorHandTransparent} alt="Tesoura" />
        </button>
      </div>

      <div className="scoreboard">
        <h2><b>Placar</b></h2>
        <p>Jogador: {playerScore}</p>
        <p>Computador: {computerScore}</p>  
       <p>Empates: {draws}</p>
       
      
      </div>
      <h3 id="embaixo">Feito Por © Pedro Matos 2023</h3>
    </div>
  );
}

export default App;

