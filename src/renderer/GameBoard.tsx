import React, { useState } from 'react';
import './GameBoard.css';
import { getCard } from 'src/renderer/GetCard';
import clearoutline from 'assets/cardborders/card_outline_clear.svg';
import blackborder from 'assets/cardborders/outline_black.svg';
import bfbackground from 'assets/cardbacks/butterfly_background.png';

export default function GameBoard() {
  const [backgroundVisible] = useState(true);

  // Function to get SVG based on index
  const getSvg = (index: number) => {
    // Return `clearoutline` for specific indexes if needed, otherwise default to `blackborder`
    return index === 2 ? clearoutline : blackborder;
  };

  return (
    <div className="GameBoard">
      {/* First row (non-tableau items) */}
      <div className="first-row">
        <img src={bfbackground} alt="card-background" className="deck-cover" />
        <img
          src={blackborder}
          alt="deck-cover-border"
          className="deck-cover-svg"
        />
        {Array.from({ length: 7 }).map((_, index) => (
          <div key={index}>
            {index < 1 || index > 7
              ? Array.from({ length: 24 }, () => getCard())
              : null}
            <img
              src={getSvg(index)}
              alt={`svg-${index}`}
              className={index === 2 ? 'card-spot-blank' : 'card-spot'}
            />
          </div>
        ))}
      </div>

      {/* Tableau items (last 7 items) */}
      <div className="second-row">
        {Array.from({ length: 7 }).map((_, index) => (
          <div key={index} className="tableau-column">
            {Array(index + 1)
              .fill(null)
              .map((_, cardIndex) => {
                const isLastCard = cardIndex === index;
                return (
                  <div
                    key={cardIndex}
                    className={`tableau-cards card-${cardIndex} ${isLastCard ? 'last-card' : ''}`}
                    style={{ zIndex: isLastCard ? 2 : 1 }}
                  >
                    {getCard()}
                    {backgroundVisible && !isLastCard && (
                      <>
                        <img
                          src={bfbackground}
                          alt={`background-tableau-${index}-${cardIndex}`}
                          className="card-background"
                        />
                        <img
                          src={blackborder}
                          alt={`border-tableau-${index}-${cardIndex}`}
                          className="card-border"
                        />
                      </>
                    )}
                  </div>
                );
              })}
          </div>
        ))}
      </div>
    </div>
  );
}
