import { expect, $ } from '@wdio/globals';

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
  // test for the first row deck and draw pile,foundation piles
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
});
