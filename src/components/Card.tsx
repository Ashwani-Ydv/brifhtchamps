// src/components/Card.tsx
import React from 'react';
import { GameItem } from '../types';

interface CardProps {
  item: GameItem;
  onSelect: (item: GameItem) => void;
}

const Card: React.FC<CardProps> = ({ item, onSelect }) => {
  return (
    <div className="card" onClick={() => onSelect(item)}>
      <img src={item.image} alt="Game Card" />
    </div>
  );
};

export default Card;
