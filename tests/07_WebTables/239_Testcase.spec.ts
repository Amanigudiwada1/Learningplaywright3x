import { expect, test } from '@playwright/test';

test('verify the webtable example1', async ({ page }) => {
    await page.goto('https://awesomeqa.com/webtable1.html');

    const rows = page.locator('table tr');
    const rowCount = await rows.count();
    let foundBurjKhalifa = false;

    for (let i = 0; i < rowCount; i++) {
        const row = rows.nth(i);
        const columns = row.locator('th, td');
        const columnCount = await columns.count();

        for (let j = 0; j < columnCount; j++) {
            const cellText = await columns.nth(j).innerText();

            if (cellText.includes('Burj Khalifa')) {
                await expect(row).toContainText('UAE');
                foundBurjKhalifa = true;
                break;
            }
        }

        if (foundBurjKhalifa) {
            break;
        }
    }

    expect(foundBurjKhalifa).toBe(true);
});
