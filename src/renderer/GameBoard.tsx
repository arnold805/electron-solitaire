import React, { useState, useEffect, useRef, useCallback } from 'react';
import './GameBoard.css';
import { getCard } from 'src/renderer/GetCard';
import clearoutline from 'assets/cardborders/card_outline_clear.svg';
import decknull from 'assets/cardborders/card_outline_grey_null.svg';
import blackborder from 'assets/cardborders/outline_black.svg';
import bfbackground from 'assets/cardbacks/butterfly_background.png';

export default function GameBoard() {
  const [backgroundVisible] = useState(true);
  const [showDeckCover, setShowDeckCover] = useState(true);
  const [showDeckCoverSvg, setShowDeckCoverSvg] = useState(true);
  const [firstRowElements, setFirstRowElements] = useState<React.JSX.Element[]>([]);
  const [secondRowElements, setSecondRowElements] = useState<React.JSX.Element[]>([]);
  const [deckCardCount, setDeckCardCount] = useState(24);

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
    setDeckCardCount((prevDeckCount) => {
      const newDeckCount = prevDeckCount - 1;
      console.log(`new deck count: ${newDeckCount}`);

      if (newDeckCount === 0) {
        setShowDeckCover(false);
        setShowDeckCoverSvg(false);
      }
      if (newDeckCount === -1) {
        setShowDeckCover(true);
        setShowDeckCoverSvg(true);
        const slot1 = document.querySelector('.slot-1');
        const slot0 = document.querySelector('.slot-0');
        const slot1CardSpots = slot1?.querySelectorAll('.card-front') || [];
        // Remove each child from its parent
        slot1CardSpots.forEach((cardSpot) => {
          slot1?.removeChild(cardSpot);
          slot0?.appendChild(cardSpot);
        });
        setDeckCardCount(deckCardCount);
      } else if (newDeckCount >= 0) {
        const slot0 = document.querySelector('.slot-0');
        const slot1 = document.querySelector('.slot-1');
        const slot0Card = slot0?.querySelector('.card-front') as HTMLElement;
        slot0.removeChild(slot0Card);
        console.log(`card ${slot0Card} removed`);
        slot1.appendChild(slot0Card);
        console.log(`card ${slot0Card} appended`);
      }

      return newDeckCount;
    });
  }, []);

  return (
    <div className="GameBoard">
      <button type="button" className="deckBtn" onClick={deckClick}>
        Deck
      </button>
      <div className="first-row">
        {showDeckCover ? (
          <img
            src={bfbackground}
            alt="card-background"
            className="deck-cover"
          />
        ) : (
          <img src={decknull} alt="deck-null" className="deck-null" />
        )}
        {showDeckCoverSvg && (
          <img
            src={blackborder}
            alt="deck-cover-border"
            className="deck-cover-svg"
          />
        )}
        {firstRowElements}
      </div>

      <div className="second-row">{secondRowElements}</div>
    </div>
  );
}
