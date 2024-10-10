import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';

interface HandProps {
  cards: string[];
}

const Hand: React.FC<HandProps> = ({ cards }) => {
  const [focusedCard, setFocusedCard] = useState<string | null>(null);
  const [selected, setSelected] = useState<string[]>([]);

  const handleCardClick = (cardName: string) => {
    const duplicate = selected;
    if (selected.includes(cardName)) {
      const index = duplicate.indexOf(cardName);
      duplicate.splice(index, 1)
      setSelected(duplicate);
      return;
    }
    duplicate.push(cardName)
    setSelected(duplicate);
  };

  return (
    <div style={{ position: 'relative', width: 'fit-content', height: '220px' }}>
      {cards.map((cardName, index) => {
        const isFocused = focusedCard === cardName;

        const multiplier = cards.length > 1 ? 1.5 * (35 / cards.length**1.5) : 0;
        const angle = (index - cards.length / 2) * multiplier;

        return (
          <div
            key={cardName}
            onMouseEnter={() => setFocusedCard(cardName)}
            onMouseLeave={() => setFocusedCard(null)}
            style={{
              position: 'absolute',
              left: `${-24.44 + index * 2}vw`,
              height: '20vw',
            }}
          >
            <Card
              name={cardName}
              isFocused={isFocused || selected.includes(cardName)}
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
