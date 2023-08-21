import { test, expect } from '@playwright/test';
import FetchAllCharacters from 'src/app/page';

test('Should display characters on the home page', async ({ page }) => {
    await page.goto('http://localhost:3000');
  FetchAllCharacters();
  await page.waitForLoadState('networkidle');

  await page.waitForSelector('.character');

  const charactersCount = await page.$$eval('.character', (characters) => characters.length);
  expect(charactersCount).toBeGreaterThan(0);
});
