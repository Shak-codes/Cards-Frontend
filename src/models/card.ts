// src/models/card.ts

export enum Suit {
  Hearts = 'hearts',
  Diamonds = 'diamonds',
  Clubs = 'clubs',
  Spades = 'spades',
}

export enum Value {
  Two = '2',
  Three = '3',
  Four = '4',
  Five = '5',
  Six = '6',
  Seven = '7',
  Eight = '8',
  Nine = '9',
  Ten = '10',
  Jack = 'Jack',
  Queen = 'Queen',
  King = 'King',
  Ace = 'Ace',
}

export enum Effect {
  None = 'none',
  Skip = 'skip',
  DrawTwo = 'draw_two',
  DrawFive = 'draw_five',
  ChangeSuit = 'change_suit',
}


export interface Card {
  suit: Suit;
  value: Value;
  effect: Effect;
  stackable: Boolean;
}
