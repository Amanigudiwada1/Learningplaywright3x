import { test, expect, type Locator } from '@playwright/test';

test('multiple element filter', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');

    const rightPanelLinks: Locator[] = await page.locator('a.list-group-item').all();
    console.log(rightPanelLinks.length);

    for (const link of rightPanelLinks) {
        console.log(await link.getAttribute('href'));
    }
});
