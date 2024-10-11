// import './CardBackground.css';

type CardProps = {
  cardValue: string; // e.g., "A", "2", ..., "K"
  cardSuit: 'diamonds' | 'spades' | 'clubs' | 'hearts';
};

const cardValues = [
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
] as const;
const cardSuits = ['diamonds', 'spades', 'clubs', 'hearts'] as const;

export default function Deck({ cardValue, cardSuit }: CardProps) {
  const cardRanks: { [key: string]: number } = {
    A: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 11,
    Q: 12,
    K: 13,
  };

  const getCardImagePath = (suit: string, value: string): string => {
    return `/assets/cardfronts/${suit}/${suit}_${value}.png`;
  };

  // Generate an array of all 52 card image paths
  const allCardImagePaths = cardSuits.flatMap((suit) =>
    cardValues.map((value) => getCardImagePath(suit, value)),
  );

  // Get the image path and rank for the current card
  const cardImagePath = getCardImagePath(cardSuit, cardValue);
  const cardRank = cardRanks[cardValue];

  return (
    <div>
      <img
        src={cardImagePath}
        alt={`${cardValue} of ${cardSuit}`}
        className="card-front"
      />
      <p>Rank: {cardRank}</p>
      {/* Optional: Display all card image paths for debugging */}
      <pre>{JSON.stringify(allCardImagePaths, null, 2)}</pre>
    </div>
  );
}
