import { expect, $, $$ } from '@wdio/globals';

const assert = require('assert');

describe('Home and base game setup testing', () => {
  it('should print application title', async () => {
    await expect($('h1')).toHaveText('Welcome to Solitaire!');
  });
  it('should click a New Game button and navigate to the game page with the base setup', async () => {
    const newGameButton = await $('button=New Game');
    const isButtonPresent = await newGameButton.isExisting();
    expect(isButtonPresent).toBe(true);

    await newGameButton.click();
    const gameBoardDiv = await $('.GameBoard');
    const isGameBoardVisible = await gameBoardDiv.isExisting();
    expect(isGameBoardVisible).toBe(true);

    const svgImages = await $$('img[src*=".svg"]');
    expect(svgImages.length).toBe(35); // check for 35 total card border svg's (one that is transparent)

    const butterflyImg = await $('img.card-background');
    const isButterflyImgPresent = await butterflyImg.isExisting();
    expect(isButterflyImgPresent).toBe(true);

    const butterflyImgSrc = await butterflyImg.getAttribute('src');
    expect(butterflyImgSrc).toContain('.png');
  });
});

describe('Deck Testing', () => {
  it('should display the base 52 card deck with no duplicates', async () => {
    // Check if the button to generate the deck exists and click it
    const deckButton = await $('button=Deck');
    const isButtonPresent = await deckButton.isExisting();
    expect(isButtonPresent).toBe(true);

    await deckButton.click();

    // Capture all the card elements (adjust the selector if needed)
    const cards = await $$('svg.card'); // If your cards are SVGs, adjust this to match the actual structure

    // Check if 52 cards are rendered
    const totalCards = cards.length;
    expect(totalCards).toBe(52);

    // Extract the values and suits from each card
    const cardData = await Promise.all(
      cards.map(async (card) => {
        const value = await card.$('.card-value').getText(); // Adjust the selector if needed
        const suit = await card.$('.card-suit').getText(); // Adjust the selector if needed
        return { value, suit };
      })
    );

    // Create a Set to ensure all cards are unique
    const uniqueCards = new Set(cardData.map((card) => `${card.value} of ${card.suit}`));

    // Assert that there are no duplicates (Set size should be 52)
    expect(uniqueCards.size).toBe(52);
  });
});
