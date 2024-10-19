import React, { useState } from 'react';
import './GameBoard.css';
import Deck from 'src/renderer/Deck';
import clearoutline from 'assets/cardborders/card_outline_clear.svg';
import blackborder from 'assets/cardborders/outline_black.svg';
import bfbackground from 'assets/cardbacks/butterfly_background.png';

export default function GameBoard() {
  const backgroundVisible = useState(true); // State to control butterfly background visibility

  const svgs = [
    blackborder,
    blackborder,
    clearoutline,
    blackborder,
    blackborder,
    blackborder,
    blackborder,
    blackborder,
    blackborder,
    blackborder,
    blackborder,
    blackborder,
    blackborder,
    blackborder,
  ];

  const firstRowItems = svgs.slice(0, 7);
  const secondRowItems = svgs.slice(-7);

  return (
    <div className="GameBoard">
      {/* First row (non-tableau items) */}
      <div className="first-row">
        <img src={bfbackground} alt="card-background" className="deck-cover" />
        {firstRowItems.map((svg, index) => (
          <div key={index} className="card-container">
            {index < 1 || index > 7 ? <Deck /> : null}
            <img src={svg} alt={`svg-${index}`} className="card-border" />
          </div>
        ))}
      </div>

      {/* Tableau items (last 7 items) */}
      <div className="second-row">
        {secondRowItems.map((svg, index) => (
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
                    <Deck />
                    {backgroundVisible && !isLastCard && (
                      <img
                        src={bfbackground}
                        alt={`background-tableau-${index}-${cardIndex}`}
                        className="card-background-tableau"
                      />
                    )}
                    {/* Only apply blackicon to non-last cards */}
                    {!isLastCard && (
                      <img
                        src={blackborder}
                        alt={`svg-border-tableau-${index}-${cardIndex}`}
                        className="card-background-border"
                      />
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
