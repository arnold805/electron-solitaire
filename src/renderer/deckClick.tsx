import React, { useState, useEffect, useCallback } from 'react';


const deckClick = useCallback(() => {
    setdeckCount((prevDeckCount) => {
      const newDeckCount = prevDeckCount - 1;
      console.log('deckCount', newDeckCount);

      if (newDeckCount === 0) {
        // Remove the deck cover when deckCount reaches zero
        const deckCover = document.querySelector('.deck-cover');
        if (deckCover) {
          deckCover.remove();

          const borderImage = nulldeckicon;
          document.querySelectorAll('.deck-cover-svg').forEach((svgElement) => {
            const imgElement = svgElement as HTMLImageElement;
            imgElement.src = borderImage;
          });
        }
      } else if (newDeckCount > 0 && !document.querySelector('.deck-cover')) {
        // Restore the deck cover if deckCount goes back above zero
        const firstRow = document.querySelector('.first-row');

        // Create and append a new deck-cover image
        const newDeckCover = document.createElement('img');
        newDeckCover.src = bfbackground;
        newDeckCover.alt = 'deck cover';
        newDeckCover.classList.add('deck-cover');
        firstRow?.appendChild(newDeckCover);

        // Reset border image to blackborder
        document.querySelectorAll('.deck-cover-svg').forEach((svgElement) => {
          const imgElement = svgElement as HTMLImageElement;
          imgElement.src = blackborder;
        });
      } else {
        const slot0 = document.querySelector('.slot-0');
        const slot1 = document.querySelector('.slot-1');
        const slot0Card = slot0?.querySelector('.card-front') as HTMLElement;
        const slot1CardSpots = slot1?.querySelectorAll('.card-spot') || [];

        if (newDeckCount === 0) {
          // Move all cards from slot-1 back to slot-0
          Array.from(slot1.children).forEach((card) => {
            slot1.removeChild(card);
            slot0.appendChild(card);
          });
        } else if (slot0Card) {
          // Move the first .card-front from slot-0 to slot-1
          slot0.removeChild(slot0Card);
          slot1.appendChild(slot0Card);
        }
      }

      return newDeckCount;
    });
  }, []);
