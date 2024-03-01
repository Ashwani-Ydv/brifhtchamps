// src/components/GameBoard.tsx
import React, { useEffect, useState } from 'react';
import { GameItem } from '../types';
import Card from './Card';

const GameBoard: React.FC = () => {
  const [items, setItems] = useState<GameItem[]>([]);
  const [selectedItems, setSelectedItems] = useState<string[]>([]); // Changed to track IDs of selected items
  const [matches, setMatches] = useState(0);

useEffect(() => {
    // Load and shuffle game items from JSON file
    fetch('/gameItems.json')
        .then((res) => res.json())
        .then((data) => {
            const doubledData = [...data, ...data.map((item: GameItem) => ({ ...item, id: `copy-${item.id}` }))]; // Ensure unique IDs for duplicates
            setItems(shuffleItems(doubledData));
        });
}, []);

  // Fisher-Yates (Knuth) Shuffle
  const shuffleItems = (items: GameItem[]): GameItem[] => {
    let currentIndex = items.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [items[currentIndex], items[randomIndex]] = [
        items[randomIndex], items[currentIndex]];
    }

    return items;
  };

  const handleSelectItem = (selectedItem: GameItem) => {
    // Prevent selecting more than two items
    if (selectedItems.length === 2) return;

    const newSelectedItems = [...selectedItems, selectedItem.id];
    setSelectedItems(newSelectedItems);

    // Check for match if two items have been selected
    if (newSelectedItems.length === 2) {
      const [firstItem, secondItem] = newSelectedItems.map(id =>
        items.find(item => item.id === id)
      );

      if (firstItem && secondItem && firstItem.image === secondItem.image) {
        // Match found
        setMatches(matches + 1);
        setItems(prevItems => prevItems.map(item => 
          item.id === firstItem.id || item.id === secondItem.id ? { ...item, matched: true } : item
        ));
        setSelectedItems([]);
      } else {
        // No match, reset after a short delay
        setTimeout(() => {
          setSelectedItems([]);
        }, 1000);
      }
    }
  };


// ...

return (
    <div className="game-board">
        {items.map((item) => (
            <Card 
            key={item.id} 
            item={item} 
            onSelect={handleSelectItem} 
            // selected={selectedItems.includes(item.id)} 
            />
        ))}
    </div>
);
};

export default GameBoard;
