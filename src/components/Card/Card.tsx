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
        overflow: 'hidden',
        borderRadius: `4.5%`,
        height: '80%',
        boxShadow: isFocused
            ? '0 0 15px 5px rgba(0, 255, 0, 0.6)'
            : '5px 5px 15px rgba(0, 0, 0, 0.5)',
        animation: isFocused
          ? 'pulse-glow 1.5s infinite ease-in-out'
          : 'none',
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
      <style>
        {`
          @keyframes pulse-glow {
            0% {
              box-shadow: 0 0 4px 4px rgba(0, 255, 0, 0.6);
            }
            50% {
              box-shadow: 0 0 6px 6px rgba(0, 255, 0, 0.8);
            }
            100% {
              box-shadow: 0 0 4px 4px rgba(0, 255, 0, 0.6);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Card;
