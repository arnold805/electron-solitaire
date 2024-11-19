import { expect, $ } from '@wdio/globals';

async function clickMultipleTimes(element, times) {
  for (let i = 0; i < times; i += 1) {
    element.click();
  }
}

describe('Deck flow test', () => {
  it('should click a New Game button and navigate to the game page with the base setup', async () => {
    const newGameButton = await $('button=New Game');
    const isButtonPresent = await newGameButton.isExisting();
    expect(isButtonPresent).toBe(true);
    await newGameButton.click();

    const gameBoardDiv = await $('.GameBoard');
    const isGameBoardVisible = await gameBoardDiv.isExisting();
    expect(isGameBoardVisible).toBe(true);
  });
  it('should click the deck 24 times to show 24 cards in slot-1 and no cards in slot-0', async () => {
    const deckButton = await $('button=Deck');
    const isButtonPresent = await deckButton.isExisting();
    expect(isButtonPresent).toBe(true);
    clickMultipleTimes(deckButton, 24);
    const slotDiv0 = await $('.slot-0');
    const deckCards = await slotDiv0.$('img.card-front');
    expect(deckCards).toBeDisplayed(false);
  });
  it('should click 1 more time to reset all cards back into slot-0', async () => {
    const deckButton = await $('button=Deck');
    const isButtonPresent = await deckButton.isExisting();
    expect(isButtonPresent).toBe(true);
    await deckButton.click();
    const slotDiv1 = await $('.slot-1');
    const deckCards = await slotDiv1.$('img.card-front');
    expect(deckCards).toBeDisplayed(false);
  });
});
