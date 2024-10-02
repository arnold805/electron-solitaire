import { expect, $, $$ } from '@wdio/globals';

describe('Electron Testing', () => {
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
    expect(svgImages.length).toBe(13);

    const butterflyImg = await $('img.card-background');
    const isButterflyImgPresent = await butterflyImg.isExisting();
    expect(isButterflyImgPresent).toBe(true);

    const butterflyImgSrc = await butterflyImg.getAttribute('src');
    expect(butterflyImgSrc).toContain('.png');
  });
});
