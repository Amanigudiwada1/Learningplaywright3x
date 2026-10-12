import {test, expect, Locator} from '@playwright/test';

test ('verify the Testcase',async({ page }) =>{

await page.goto("https://app.thetestingacademy.com/playwright/webtable");

//await page.locator('//td[text()="Rohan.Mehta"]/preceding-sibling::td/input').click();

await page.locator("tr:has(td:text('Rohan.mehta'))").locator('input').first().click();

// await page.pause();
 await page.waitForTimeout(5000);


});
