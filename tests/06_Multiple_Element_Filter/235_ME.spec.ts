import {test, expect} from '@playwright/test';

test('Basic verify how to handle multiple elements',async({ page }) => {
    // Test implementation here
await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
const rightPanelLinksTexts: string[] = await page.locator("#rightPanel a").allTextContents();
console.log(rightPanelLinksTexts.length);

for (const linkText of rightPanelLinksTexts) {
    console.log(linkText);
    if (linkText === "Forgotten Password") {
        await page.getByText(linkText).first().click();
    }
}

const rightPanelLinks = await page.locator('a.list-group-item').all();
for (const link of rightPanelLinks) {
    console.log(await link.getAttribute("href"));
}
});