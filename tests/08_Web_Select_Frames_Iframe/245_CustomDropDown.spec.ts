import { test, expect } from '@playwright/test';

test('verify custom dropdowns', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/tables/dropdowns');

    await page.getByTestId('lang-trigger').click();
    await page.getByRole('option', { name: 'JavaScript' }).click();
    await expect(page.getByTestId('lang-trigger')).toContainText('JavaScript');

    await page.getByTestId('experience-trigger').click();
    await page.getByRole('option', { name: 'Mid-level (4-6 years)' }).click();
    await expect(page.getByTestId('experience-trigger')).toContainText('Mid-level (4-6 years)');
   
    await page.pause();
});