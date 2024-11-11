// import { expect, $ } from '@wdio/globals';

// describe('Deck generation test', () => {
//   const cardAltTexts = [
//     'hearts_A',
//     'hearts_02',
//     'hearts_03',
//     'hearts_04',
//     'hearts_05',
//     'hearts_06',
//     'hearts_07',
//     'hearts_08',
//     'hearts_09',
//     'hearts_10',
//     'hearts_J',
//     'hearts_Q',
//     'hearts_K',
//     'diamonds_A',
//     'diamonds_02',
//     'diamonds_03',
//     'diamonds_04',
//     'diamonds_05',
//     'diamonds_06',
//     'diamonds_07',
//     'diamonds_08',
//     'diamonds_09',
//     'diamonds_10',
//     'diamonds_J',
//     'diamonds_Q',
//     'diamonds_K',
//     'clubs_A',
//     'clubs_02',
//     'clubs_03',
//     'clubs_04',
//     'clubs_05',
//     'clubs_06',
//     'clubs_07',
//     'clubs_08',
//     'clubs_09',
//     'clubs_10',
//     'clubs_J',
//     'clubs_Q',
//     'clubs_K',
//     'spades_A',
//     'spades_02',
//     'spades_03',
//     'spades_04',
//     'spades_05',
//     'spades_06',
//     'spades_07',
//     'spades_08',
//     'spades_09',
//     'spades_10',
//     'spades_J',
//     'spades_Q',
//     'spades_K',
//   ];
//   it('should click New Game button', async () => {
//     const deckButton = await $('button=New Game');
//     const isButtonPresent = await deckButton.isExisting();
//     expect(isButtonPresent).toBe(true);
//     await deckButton.click();
//   });
//   cardAltTexts.forEach((altText) => {
//     it(`should display card image with alt text "${altText}" and class "card-front"`, async () => {
//       const cardImage = await $(`img.card-front[alt="${altText}"]`);
//       await expect(cardImage).toBeDisplayed();
//       const className = await cardImage.getAttribute('class');
//       expect(className).toContain('card-front');
//     });
//   });
// });
