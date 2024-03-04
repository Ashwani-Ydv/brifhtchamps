
import React from 'react';
import styles from './IntroScreen.module.css';

interface IntroScreenProps {
  onStartGame: () => void;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ onStartGame }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to the Matching Game!</h1>
      <button className={styles.startButton} onClick={onStartGame}>
        Start Game
      </button>
    </div>
  );
};

export default IntroScreen;
