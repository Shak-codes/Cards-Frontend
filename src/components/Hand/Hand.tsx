import React, { useState } from 'react';
import Card from '../Card/Card';

interface HandProps {
  cards: string[]; // Array of card names, e.g., ["AS", "2S", "KH"]
}

const Hand: React.FC<HandProps> = ({ cards }) => {
  const [focusedCard, setFocusedCard] = useState<string | null>(null);
  const [selected, setSelected] = useState<string[]>([]);

  const handleCardClick = (cardName: string) => {
    const duplicate = selected;
    if (selected.includes(cardName)) {
      const index = duplicate.indexOf(cardName);
      setSelected(duplicate.splice(index, 1));
      return;
    }
    duplicate.push(cardName)
    setSelected(duplicate);
  };

  return (
    <div style={{ position: 'relative', width: 'fit-content', height: '220px' }}>
      {cards.map((cardName, index) => {
        const isFocused = focusedCard === cardName;

        // Calculate rotation angle
        const multiplier = cards.length > 1 ? 1.5 * (35 / cards.length**1.5) : 0;
        const angle = (index - cards.length / 2) * multiplier; // Adjust the multiplier for rotation intensity
        // const angle = (index - cards.length / Math.floor(Math.sqrt(cards.length))) * 0.1;

        return (
          <div
            key={cardName}
            onMouseEnter={() => setFocusedCard(cardName)}
            onMouseLeave={() => setFocusedCard(null)}
            style={{
              position: 'absolute',
              left: `${-24.44 * cards.length + index * 40}px`,
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
