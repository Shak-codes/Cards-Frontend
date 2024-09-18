// src/utils/shuffle.ts

import { Card } from '../models/card';

export const shuffleDeck = (deck: Card[]): Card[] => {
  // Make a copy of the deck to avoid mutating the original array
  const shuffledDeck = deck.slice();

  for (let i = shuffledDeck.length - 1; i > 0; i--) {
    // Generate a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));

    // Swap the cards at indices i and j
    [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
  }

  return shuffledDeck;
};
