import React from 'react';

interface CardProps {
  suit: string;
  value: string;
  x: number; // x position for the card
  y: number; // y position for the card
}

const Card: React.FC<CardProps> = ({ suit, value, x, y }) => {
  return (
    <svg
      width="100"
      height="140"
      x={x}
      y={y}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="100"
        height="140"
        rx="10"
        ry="10"
        fill="white"
        stroke="black"
      />
      <text className="card-value" x="10" y="20" fontSize="20" fill="black">
        {value}
      </text>
      <text className="card-suit" x="10" y="60" fontSize="20" fill="black">
        {suit}
      </text>
    </svg>
  );
};

export default Card;
