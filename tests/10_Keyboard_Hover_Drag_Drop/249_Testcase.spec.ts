import { test, expect } from '@playwright/test';

test('Testcase', async ({ page }) => {
 await page .goto("https://www.keycode.info");

 await page.keyboard.press('A');
 await page.screenshot({path: 'A.png'});

 await page.keyboard.press('ArrowLeft');
 await expect(page.getByRole('heading', { name: 'JavaScript Key Code 37' })).toBeVisible();
 await page.getByRole('heading', { name: 'Unicode' }).scrollIntoViewIfNeeded();
 await page.screenshot({path: 'ArrowLeft.png'});

 await page.keyboard.press('Shift+o');
 await page.screenshot({path: 'o.png'});

 await page.keyboard.up("Shift");
 await page.keyboard.down("Shift");

 await page.pause();

});