import React from 'react';
import { GameItem } from '../types';

interface CardProps {
  item: GameItem;
  onSelect: (id: string) => void;
  selected: boolean;
}

const Card: React.FC<CardProps> = ({ item, onSelect, selected }) => {
  return (
    <div className={`card ${selected ? 'selected' : ''}`} onClick={() => onSelect(item.id)}>
      <img src={item.image} alt={`Item ${item.id}`} />
    </div>
  );
};

export default Card;
