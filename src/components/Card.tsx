// src/components/Card.tsx
import React from 'react';
import { GameItem } from '../types';

interface CardProps {
  item: GameItem;
  onSelect: (id: string) => void; // Changed from (item: GameItem) => void to (id: string) => void
  selected: boolean;
}

const Card: React.FC<CardProps> = ({ item, onSelect, selected }) => {
  return (
    <div className={`card ${selected ? 'selected' : ''}`} onClick={() => onSelect(item.id)}>
      {/* Other card markup, like showing the item image or back of card */}
    </div>
  );
};

export default Card;
