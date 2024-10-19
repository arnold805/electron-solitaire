import { expect, $, $$ } from '@wdio/globals';

describe('Deck generation and game board test', () => {
  it('should click a New Game button and navigate to the game page with the base setup', async () => {
    const newGameButton = await $('button=New Game');
    const isButtonPresent = await newGameButton.isExisting();
    expect(isButtonPresent).toBe(true);

    await newGameButton.click();
    const gameBoardDiv = await $('.GameBoard');
    const isGameBoardVisible = await gameBoardDiv.isExisting();
    expect(isGameBoardVisible).toBe(true);
  });
  it('should render all 52 cards with correct alt attributes', async () => {
    // Array containing all expected alt attributes for a 52-card deck
    const cardAltTexts = [
      'hearts_A',
      'hearts_02',
      'hearts_03',
      'hearts_04',
      'hearts_05',
      'hearts_06',
      'hearts_07',
      'hearts_08',
      'hearts_09',
      'hearts_10',
      'hearts_J',
      'hearts_Q',
      'hearts_K',
      'diamonds_A',
      'diamonds_02',
      'diamonds_03',
      'diamonds_04',
      'diamonds_05',
      'diamonds_06',
      'diamonds_07',
      'diamonds_08',
      'diamonds_09',
      'diamonds_10',
      'diamonds_J',
      'diamonds_Q',
      'diamonds_K',
      'clubs_A',
      'clubs_02',
      'clubs_03',
      'clubs_04',
      'clubs_05',
      'clubs_06',
      'clubs_07',
      'clubs_08',
      'clubs_09',
      'clubs_10',
      'clubs_J',
      'clubs_Q',
      'clubs_K',
      'spades_A',
      'spades_02',
      'spades_03',
      'spades_04',
      'spades_05',
      'spades_06',
      'spades_07',
      'spades_08',
      'spades_09',
      'spades_10',
      'spades_J',
      'spades_Q',
      'spades_K',
    ];

    // Use forEach to iterate over each alt text and check for existence
    await Promise.all(
      cardAltTexts.map(async (altText) => {
        const imgElement = await $(`img[alt="${altText}"]`);
        const isImgPresent = await imgElement.isExisting();
        expect(isImgPresent).toBe(true);
      }),
    );
  });
  it('should have 21 card background elements on card-background-border', async () => {
    // Locate all elements with the class 'card-background-tableau'
    const bfbackgroundElementsTableau = await $$('.card-background-border');

    // Assert that there are exactly 22 bfbackground elements
    expect(bfbackgroundElementsTableau).toBeElementsArrayOfSize(21);
  });
  it('should have 1 card background element on card-border', async () => {
    // Locate all elements with the class 'card-background-tableau'
    const bfbackgroundElementsTableau = await $$('.card-border');

    // Assert that there are exactly 22 bfbackground elements
    expect(bfbackgroundElementsTableau).toBeElementsArrayOfSize(1);
  });
});
