import React from 'react';
import styles from './FinalRewardScreen.module.css'; // Ensure you have the corresponding CSS module file

interface FinalRewardScreenProps {
  bananasCollected: number;
  onRestartGame: () => void;
}

const FinalRewardScreen: React.FC<FinalRewardScreenProps> = ({
  bananasCollected,
  onRestartGame,
}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Congratulations!</h1>
      <p className={styles.rewardMessage}>
        You collected {bananasCollected} bananas!
      </p>
      <button className={styles.restartButton} onClick={onRestartGame}>
        Play Again
      </button>
    </div>
  );
};

export default FinalRewardScreen;
