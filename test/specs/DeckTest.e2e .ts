import { expect, $, $$ } from '@wdio/globals';

describe('Deck generation test', () => {
  it('should click the Deck button', async () => {
    const deckButton = await $('button=Deck');
    const isButtonPresent = await deckButton.isExisting();
    expect(isButtonPresent).toBe(true);
    await deckButton.click();
  });
  it('should render 52 img elements with the correct alt format', async () => {
    const cardElements = await $$('img.card-front');
    expect(cardElements.length).toBe(52);
  });
  it('should render an img with alt="hearts_A"', async () => {
    const imgElement = await $('img[alt="hearts_A"]');
    const isImgPresent = await imgElement.isExisting();
    expect(isImgPresent).toBe(true);
  });
});
