// src/components/InstructionScreen.tsx
import React from 'react';
import styles from './InstructionScreen.module.css'; // Ensure you have the corresponding CSS module file

interface InstructionScreenProps {
  onBeginActivity: () => void;
}

const InstructionScreen: React.FC<InstructionScreenProps> = ({ onBeginActivity }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>How to Play</h1>
      <p className={styles.instructions}>
        Match the cards to win bananas!
        {/* Replace text with actual instructions from Figma design */}
      </p>
      <button className={styles.beginButton} onClick={onBeginActivity}>
        Begin
      </button>
    </div>
  );
};

export default InstructionScreen;
