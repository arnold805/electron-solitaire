import React, { useState, useEffect, useCallback } from 'react';
import './GameBoard.css';
import { getCard } from 'src/renderer/GetCard';
import clearoutline from 'assets/cardborders/card_outline_clear.svg';
import blackborder from 'assets/cardborders/outline_black.svg';
import bfbackground from 'assets/cardbacks/butterfly_background.png';

export default function GameBoard() {
  const [backgroundVisible] = useState(true);
  const [deckFirstClick, setDeckFirstClick] = useState(false);
  const [firstRowElements, setFirstRowElements] = useState<React.JSX.Element[]>([]);
  const [secondRowElements, setSecondRowElements] = useState<React.JSX.Element[]>([]);

  const getSvg = (index: number) => {
    return index === 2 ? clearoutline : blackborder;
  };

  useEffect(() => {
    const topRowElements = Array.from({ length: 7 }).map((_, index) => (
      <div key={index} className={`slot-${index}`}>
        {index < 1 || index > 7
          ? Array.from({ length: 24 }, () => getCard())
          : null}
        <img
          src={getSvg(index)}
          alt={`svg-${index}`}
          className={index === 2 ? 'card-spot-blank' : 'card-spot'}
        />
      </div>
    ));

    const bottomRowElements = Array.from({ length: 7 }).map((_, index) => (
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
    ));

    setFirstRowElements(topRowElements);
    setSecondRowElements(bottomRowElements);
  }, []);

  const deckClick = useCallback(() => {
    if (!deckFirstClick) {
      const deckCover = document.querySelector('.deck-cover');
      if (deckCover) {
        deckCover.remove();
      }
      const deckCoverSvg = document.querySelector('.deck-cover-svg') as HTMLElement;
      if (deckCoverSvg) {
        deckCoverSvg.style.zIndex = '-2';
      }
      setDeckFirstClick(true);
    }
  }, [deckFirstClick]);

  return (
    <div className="GameBoard">
      <button type="button" className="deckBtn" onClick={deckClick}>
        Deck
      </button>
      <div className="first-row">
        <img src={bfbackground} alt="card-background" className="deck-cover" />
        <img
          src={blackborder}
          alt="deck-cover-border"
          className="deck-cover-svg"
        />
        {firstRowElements}
      </div>

      <div className="second-row">{secondRowElements}</div>
    </div>
  );
}
