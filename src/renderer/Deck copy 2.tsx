// import React from 'react';

// // Import the diamond images using require (this helps ensure they're bundled correctly in Electron)
// const DiamondA = require('./assets/cardfronts/diamond/diamond_A.png');
// const Diamond2 = require('./assets/cardfronts/diamond/diamond_2.png');
// const Diamond3 = require('./assets/cardfronts/diamond/diamond_3.png');
// const Diamond4 = require('./assets/cardfronts/diamond/diamond_4.png');
// const Diamond5 = require('./assets/cardfronts/diamond/diamond_5.png');
// const Diamond6 = require('./assets/cardfronts/diamond/diamond_6.png');
// const Diamond7 = require('./assets/cardfronts/diamond/diamond_7.png');
// const Diamond8 = require('./assets/cardfronts/diamond/diamond_8.png');
// const Diamond9 = require('./assets/cardfronts/diamond/diamond_9.png');
// const Diamond10 = require('./assets/cardfronts/diamond/diamond_10.png');
// const DiamondJ = require('./assets/cardfronts/diamond/diamond_J.png');
// const DiamondQ = require('./assets/cardfronts/diamond/diamond_Q.png');
// const DiamondK = require('./assets/cardfronts/diamond/diamond_K.png');

// // Define the structure of a card
// interface Card {
//   id: string;
//   suit: string;
//   value: string;
// }

// // Map diamond card values to the corresponding PNG files
// const diamondImages: { [key: string]: string } = {
//   A: DiamondA,
//   '2': Diamond2,
//   '3': Diamond3,
//   '4': Diamond4,
//   '5': Diamond5,
//   '6': Diamond6,
//   '7': Diamond7,
//   '8': Diamond8,
//   '9': Diamond9,
//   '10': Diamond10,
//   J: DiamondJ,
//   Q: DiamondQ,
//   K: DiamondK,
// };

// // Card suits and values for a traditional 52-card deck
// const suits: string[] = ['hearts', 'diamonds', 'clubs', 'spades'];
// const values: string[] = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

// // Function to create the deck of cards
// const createDeck = (): Card[] => {
//   const cardDeck: Card[] = [];
//   for (const suit of suits) {
//     for (const value of values) {
//       cardDeck.push({
//         id: `${suit}-${value}`, // use suit and value to create a unique id for each card
//         suit,
//         value,
//       });
//     }
//   }
//   return cardDeck;
// };

// // The Card component that renders each card
// const Card: React.FC<{ suit: string; value: string; x: number; y: number }> = ({ suit, value, x, y }) => {
//   // Check if the suit is diamonds and use the appropriate image
//   const image = suit === 'diamonds' ? diamondImages[value] : null;

//   return (
//     <svg width="100" height="140" x={x} y={y} xmlns="http://www.w3.org/2000/svg">
//       {image ? (
//         // Display the diamond PNG if the suit is diamonds
//         <image href={image} width="100" height="140" />
//       ) : (
//         // Default card appearance for non-diamond suits
//         <rect width="100" height="140" rx="10" ry="10" fill="white" stroke="black" />
//       )}
//       <text className="card-value" x="10" y="20" fontSize="20" fill="black">
//         {value}
//       </text>
//       <text className="card-suit" x="10" y="60" fontSize="20" fill="black">
//         {suit}
//       </text>
//     </svg>
//   );
// };

// // The Deck component that displays the full deck of cards
// const Deck: React.FC = () => {
//   const cardDeck: Card[] = createDeck(); // Generate the deck

//   return (
//     <svg width="800" height="600">
//       {cardDeck.map((card, index) => {
//         const x = (index % 13) * 70; // Calculate x position (spread across 13 columns)
//         const y = Math.floor(index / 13) * 150; // Calculate y position (new row every 13 cards)
//         return <Card key={card.id} suit={card.suit} value={card.value} x={x} y={y} />;
//       })}
//     </svg>
//   );
// };

// export default Deck;
