import { Card, Suit, Effect, Value } from '../models/card';

const createDeck = (): Card[] => {
    const deck: Card[] = [];
    
    const suits = Object.values(Suit) as Suit[];
    const values = Object.values(Value) as Value[];

    for (let i = 0; i < 2; i++) {
        for (const suit of suits) {
            for (const value of values) {
                let effect = Effect.None;
                let stackable = false;
                switch(value) {
                    case Value.Eight:
                        effect = Effect.ChangeSuit;
                        break;
                    case Value.Two:
                        effect = Effect.DrawTwo;
                        stackable = true;
                        break;
                    case Value.Jack:
                        effect = Effect.Skip;
                        break;
                    case Value.Queen:
                        if (suit == Suit.Spades) {
                            stackable = true;
                        }
                        break;
                    default:
                        effect = Effect.None;
                        break;
                }

                deck.push({ suit, value, effect, stackable })
            }
        }
    }
    return deck;
};

export default createDeck;