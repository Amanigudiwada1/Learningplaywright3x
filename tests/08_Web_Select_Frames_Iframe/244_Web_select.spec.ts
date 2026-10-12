import { expect, test } from '@playwright/test';

test('verify DropDowns', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/dropdown");

    await page.locator('#dropdown').click();
    await page.selectOption("#dropdown","Option 2");
    
});
