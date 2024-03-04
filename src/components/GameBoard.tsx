// src/components/GameBoard.tsx
import React, { useState, useEffect } from 'react';
import { GameItem } from '../types'; // Import the GameItem type definition
import Card from './Card';

interface GameBoardProps {
  onEndGame: () => void; // Callback when the game ends
}

const GameBoard: React.FC<GameBoardProps> = ({ onEndGame }) => {
  const [items, setItems] = useState<GameItem[]>([]);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [canSelect, setCanSelect] = useState(true); // Control if the user can select new cards

  // Function to shuffle items - to be implemented
  const shuffleItems = (items: GameItem[]): GameItem[] => {
    // Shuffle logic here
    return items;
  };

  // Effect to initialize the game
  useEffect(() => {
    fetch('/gameItems.json') // Adjust the path to your game items data
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Duplicate, shuffle, and set the game items
        const doubledData = [...data, ...data].map((item, index) => ({
          ...item,
          id: `${item.id}-${index}`, // Ensure unique IDs for duplicates
          matched: false
        }));
        setItems(shuffleItems(doubledData));
      })
      .catch((error) => {
        console.error('Error fetching game items:', error);
      });
  }, []);

  // Handle card selection
  const handleCardSelect = (id: string) => {
    if (!canSelect || selectedItems.includes(id)) return;

    const newSelectedItems = [...selectedItems, id];
    setSelectedItems(newSelectedItems);

    if (newSelectedItems.length === 2) {
      setCanSelect(false); // Prevent further selections
      checkForMatch(newSelectedItems);
    }
  };

  // Check if the selected cards are a match
  const checkForMatch = (selectedIds: string[]) => {
    const [firstId, secondId] = selectedIds;

    // Implement logic to check if items match and update the state accordingly
    const firstItem = items.find(item => item.id === firstId);
    const secondItem = items.find(item => item.id === secondId);

    if (firstItem && secondItem && firstItem.image === secondItem.image) {
      // If they match, mark them as matched
      setItems(prevItems => prevItems.map(item => 
        item.id === firstId || item.id === secondId ? { ...item, matched: true } : item
      ));
      setSelectedItems([]);
      setCanSelect(true);
    } else {
      // If they don't match, flip them back over after a delay
      setTimeout(() => {
        setSelectedItems([]);
        setCanSelect(true);
      }, 1000); // Adjust delay as needed
    }
  };

  // Handle the end game scenario
  const handleEndGame = () => {
    onEndGame();
  };

  // Render the game board
  return (
    <div className="game-board">
      {items.map((item) => (
        <Card
          key={item.id}
          item={item}
          onSelect={handleCardSelect}
          selected={selectedItems.includes(item.id)}
        />
      ))}
      <button onClick={handleEndGame}>End Game</button>
    </div>
  );
};

export default GameBoard;
