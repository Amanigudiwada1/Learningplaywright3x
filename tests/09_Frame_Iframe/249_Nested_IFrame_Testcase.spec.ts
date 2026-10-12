import { test ,expect, Locator ,FrameLocator } from '@playwright/test';

test('verify the testcase',async({ page }) => {
    await page.goto('https://selectorshub.com/iframe-scenario/');
    let frame1: FrameLocator = page.frameLocator('#pact1');
    let frame2: FrameLocator = frame1.frameLocator('#pact2');
    let frame3: FrameLocator = frame2.frameLocator('#pact3');

    await frame1.locator('#inp_val').fill('Aishwarya Rai');
    await frame2.locator('#jex').fill('wife');
    await frame3.locator('#glaf').fill('playwright');

    const headerText = await frame1.locator('h3').innerText();
    console.log(headerText);
    await page.waitForTimeout(5000);
    //page.keyboard
    await page.pause();
});