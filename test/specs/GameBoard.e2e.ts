import { expect, $ } from '@wdio/globals';

async function clickMultipleTimes(element, times) {
  for (let i = 0; i < times; i += 1) {
    element.click();
  }
}

describe('Game board test', () => {
  it('should click a New Game button and navigate to the game page with the base setup', async () => {
    const newGameButton = await $('button=New Game');
    const isButtonPresent = await newGameButton.isExisting();
    expect(isButtonPresent).toBe(true);
    await newGameButton.click();

    const gameBoardDiv = await $('.GameBoard');
    const isGameBoardVisible = await gameBoardDiv.isExisting();
    expect(isGameBoardVisible).toBe(true);
  });
  it('should find the 1st element in the first row as a black svg', async () => {
    const cardSpotBlank = await $('img.card-spot[alt="svg-0"');
    await expect(cardSpotBlank).toBeDisplayed();
  });
  it('should find the 2nd element in the first row as a black svg', async () => {
    const cardSpotBlank = await $('img.card-spot[alt="svg-1"');
    await expect(cardSpotBlank).toBeDisplayed();
  });
  it('should find the 3rd element in the first row as a blank svg', async () => {
    const cardSpotBlank = await $('img.card-spot-blank[alt="svg-2"');
    await expect(cardSpotBlank).toBeDisplayed();
  });
  it('should find the 4th element in the first row as a black svg', async () => {
    const cardSpotBlank = await $('img.card-spot[alt="svg-3"');
    await expect(cardSpotBlank).toBeDisplayed();
  });
  it('should find the 5th element in the first row as a black svg', async () => {
    const cardSpotBlank = await $('img.card-spot[alt="svg-4"');
    await expect(cardSpotBlank).toBeDisplayed();
  });
  it('should find the 6th element in the first row as a black svg', async () => {
    const cardSpotBlank = await $('img.card-spot[alt="svg-5"');
    await expect(cardSpotBlank).toBeDisplayed();
  });
  it('should find the 7th element in the first row as a black svg', async () => {
    const cardSpotBlank = await $('img.card-spot[alt="svg-6"');
    await expect(cardSpotBlank).toBeDisplayed();
  });
  it('the deck should contain 24 cards (slot-0)', async () => {
    const slotDiv0 = await $('.slot-0');
    const deckCards = await slotDiv0.$$('img.card-front');
    expect(deckCards).toHaveLength(24);
  });
  it('should click the deck 24 time to show the null deck icon', async () => {
    const deckButton = await $('button=Deck');
    const isButtonPresent = await deckButton.isExisting();
    expect(isButtonPresent).toBe(true);
    clickMultipleTimes(deckButton, 24);
    const nullDeckIcon = await $('div.first-row img.deck-null');
    await expect(nullDeckIcon).toBeDisplayed();
  });
  it('should click the deck 1 more time to show the deck cover', async () => {
    const deckButton = await $('button=Deck');
    const isButtonPresent = await deckButton.isExisting();
    expect(isButtonPresent).toBe(true);
    deckButton.click();
    const nullDeckIcon = await $('div.first-row img.deck-cover');
    await expect(nullDeckIcon).toBeDisplayed();
  });
});
