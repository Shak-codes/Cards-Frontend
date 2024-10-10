import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';

interface HandProps {
  cards: string[];
}

const Hand: React.FC<HandProps> = ({ cards }) => {
  const [focusedCard, setFocusedCard] = useState<string | null>(null);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  // const [leftPosition, setLeftPosition] = useState<number[]>([]);

  const handleCardClick = (cardName: string) => {
    setSelected((prev) => {
      const updatedSelection = new Set(prev);
      if (updatedSelection.has(cardName)) {
        updatedSelection.delete(cardName);
        return updatedSelection;
      } 
      updatedSelection.add(cardName); 
      return updatedSelection;
    });
  };

  return (
    <div style={{ position: 'relative', width: 'fit-content', height: '220px' }}>
      {cards.map((cardName, index) => {
        const isFocused = focusedCard === cardName;

        const multiplier = cards.length > 1 ? 1.5 * (35 / cards.length**1.5) : 0;
        const angle = (index - cards.length / 2) * multiplier;
        let left = -24.44 + index * 2;
        // const newArr = leftPosition;
        // newArr.push(left);
        // setLeftPosition(newArr);

        // for (let i = 0; i < selected.length; i++) {
        //   const highlightedIdx = cards.indexOf(selected[i]);
        //   if (index > highlightedIdx) leftPosition += 4;
        // }

        return (
          <div
            key={cardName}
            onMouseEnter={() => setFocusedCard(cardName)}
            onMouseLeave={() => setFocusedCard(null)}
            style={{
              position: 'absolute',
              left: `${left}vw`,
              height: '20vw',
              transition: 'transform 1s ease-in-out',
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
