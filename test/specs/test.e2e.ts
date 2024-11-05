import { expect, $ } from '@wdio/globals';

describe('Electron Testing', () => {
  it('should print application title', async () => {
    await expect($('h1')).toHaveText('Welcome to Solitaire!');
  });
});
