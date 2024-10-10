import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';

interface HandProps {
  cards: string[];
}

const Hand: React.FC<HandProps> = ({ cards }) => {
  const [focusedCard, setFocusedCard] = useState<string | null>(null);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [offset, setOffset] = useState<number[]>(Array(cards.length).fill(0));

  const incrementArr = (arr: number[], startIndex: number, incrementValue: number): number[] => {
    return arr.map((value, index) => {
      if (index > startIndex) {
        return value + incrementValue;
      }
      return value;
    });
  }

  const handleCardClick = (cardName: string) => {
    const index = cards.indexOf(cardName);
    setSelected((prev) => {
      const updatedSelection = new Set(prev);
      if (updatedSelection.has(cardName)) {
        updatedSelection.delete(cardName);
        setOffset(incrementArr([...offset], index, -3));
        return updatedSelection;
      } 
      updatedSelection.add(cardName); 
      setOffset(incrementArr([...offset], index, 3));
      return updatedSelection;
    });
  };

  return (
    <div style={{ position: 'relative', width: 'fit-content', height: '220px' }}>
      {cards.map((cardName, index) => {
        const isFocused = focusedCard === cardName;

        const multiplier = cards.length > 1 ? 1.5 * (35 / cards.length**1.5) : 0;
        const angle = (index - cards.length / 2) * multiplier;

        const left = -24.44 + index * 2;

        return (
          <div
            key={cardName}
            onMouseEnter={() => setFocusedCard(cardName)}
            onMouseLeave={() => setFocusedCard(null)}
            style={{
              position: 'absolute',
              transition: 'transform 0.3s ease-in-out',
              left: `${left}vw`,
              height: '20vw',
              transform: `translateX(${offset[index]}vw)`
            }}
          >
            <Card
              name={cardName}
              isFocused={isFocused || selected.has(cardName)}
              onClick={() => handleCardClick(cardName)}
              angle={angle}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Hand;
