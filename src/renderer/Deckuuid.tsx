import React from 'react';
import { v4 as uuidv4 } from 'uuid';

// Define the structure of a card
interface Card {
  id: string;
  suit: string;
  value: string;
}

// Card suits and values for a traditional 52-card deck
const suits: string[] = ['hearts', 'diamonds', 'clubs', 'spades'];
const values: string[] = [
  'A',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'J',
  'Q',
  'K',
];

// Create a deck of cards
const createDeck = (): Card[] => {
  const cardDeck: Card[] = [];
  for (let suit of suits) {
    for (let value of values) {
      cardDeck.push({
        id: uuidv4(),
        suit,
        value,
      });
    }
  }
  return cardDeck;
};

// Component to generate the deck
const Deckuuid: React.FC = () => {
  const cardDeck: Card[] = createDeck();

  return (
    <div className="card-deck">
      {cardDeck.map((card: Card) => (
        <div key={card.id} className="card">
          <span className="card-value">{card.value}</span>
          <span className="card-suit">{card.suit}</span>
        </div>
      ))}
    </div>
  );
};

export default Deckuuid;
