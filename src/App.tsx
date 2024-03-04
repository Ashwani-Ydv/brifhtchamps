// src/App.tsx
import React, { useState } from 'react';
import IntroScreen from './components/IntroScreen';
import InstructionScreen from './components/InstructionScreen';
import GameBoard from './components/GameBoard';
import FinalRewardScreen from './components/FinalRewardScreen';
// ...import other necessary components and styles

function App() {
  const [gamePhase, setGamePhase] = useState('intro'); // 'intro', 'instructions', 'game', 'final'
  const [bananasCollected, setBananasCollected] = useState(0);

  const startGame = () => setGamePhase('instructions');
  const beginActivity = () => setGamePhase('game');
  const endGame = () => setGamePhase('final');
  const restartGame = () => {
    setBananasCollected(0);
    setGamePhase('intro');
  };

  return (
    <div>
      {gamePhase === 'intro' && <IntroScreen onStartGame={startGame} />}
      {gamePhase === 'instructions' && <InstructionScreen onBeginActivity={beginActivity} />}
      {gamePhase === 'game' && <GameBoard onEndGame={endGame} />}
      {gamePhase === 'final' && <FinalRewardScreen bananasCollected={bananasCollected} onRestartGame={restartGame} />}
    </div>
  );
}

export default App;
