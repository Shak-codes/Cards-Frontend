import React, { useState } from 'react';
import * as cards from '../../assets/cards/normal';

interface CardProps {
  name: string;
  isFocused: boolean;
  onClick: () => void;
  angle: number;
}

const Card: React.FC<CardProps> = ({ name, isFocused, onClick, angle }) => {
  const src = cards[name as keyof typeof cards];

  return (
    <div
      onClick={onClick}
      style={{
        cursor: 'pointer',
        display: 'block',
        overflow: 'hidden', // Ensure no content exceeds the boundaries
        borderRadius: `0.5vw`,
        height: '80%',
        // boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.5)',
        boxShadow: isFocused
            ? '0 0 15px 5px rgba(0, 255, 0, 0.6)' // Green glow effect for selected cards
            : '5px 5px 15px rgba(0, 0, 0, 0.5)',
        transform: `translateY(${isFocused ? '-60px' : '0px'}) rotate(${angle}deg)`,
        transition: 'transform 0.1s ease-in-out',
      }}
    >
      <img
        src={src}
        alt={name}
        style={{
          display: 'block',
          overflow: 'hidden',    // Clip anything that might overflow
          height: `80%`,
        }}
      />
    </div>
  );
};

export default Card;
