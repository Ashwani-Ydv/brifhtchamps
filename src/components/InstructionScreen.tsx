import React from 'react';
import styles from './InstructionScreen.module.css';

interface InstructionScreenProps {
  onBeginActivity: () => void;
}

const InstructionScreen: React.FC<InstructionScreenProps> = ({ onBeginActivity }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>How to Play</h1>
      <p className={styles.instructions}>
        Match the cards to win bananas!
      </p>
      <button className={styles.beginButton} onClick={onBeginActivity}>
        Begin
      </button>
    </div>
  );
};

export default InstructionScreen;
