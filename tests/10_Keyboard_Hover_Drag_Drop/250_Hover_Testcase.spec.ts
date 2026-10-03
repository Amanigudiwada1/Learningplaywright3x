import { test, expect, Locator } from '@playwright/test';

test ('verify Hover for Drag and Drop', async ({ page }) => {
    await page.goto('https://app.testacademy.com/playwright/widgets/dnd');

    const columnA = page.locator('#column-a');
    const columnB = page.locator('#column-b');

    await columnA.dragTo(columnB);

    await page.pause();
});
