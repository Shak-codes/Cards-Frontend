import React, { useState } from 'react';
import * as cards from '../../assets/cards/normal';
import * as blanks from '../../assets/cards/blank';

interface CardProps {
  name: string;
}

const Card: React.FC<CardProps> = ({ name }) => {
  const [isFocused, setIsFocused] = useState(false);
  const normal = cards[name as keyof typeof cards];
  const blank = blanks["B" + name as keyof typeof blanks];

  return (
    <div onClick={() => setIsFocused(!isFocused)}>
      <img
        src={isFocused ? normal : blank}
        alt={name}
      />
    </div>
  );
};

export default Card;
