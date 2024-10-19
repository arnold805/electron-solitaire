import { expect, $ } from '@wdio/globals';

it('should print application title', async () => {
  await expect($('h1')).toHaveText('Welcome to Solitaire!');
});
