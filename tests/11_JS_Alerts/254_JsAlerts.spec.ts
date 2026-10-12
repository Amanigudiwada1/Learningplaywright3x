import { expect, test } from '@playwright/test';

const URL = 'https://the-internet.herokuapp.com/javascript_alerts';

test.describe('JavaScript alerts', () => {
    test.describe.configure({ mode: 'serial' });

    test.beforeEach(async ({ page }) => {
        test.setTimeout(60_000);
        await page.goto(URL, { waitUntil: 'commit' });
    });

    test('accept a JavaScript alert', async ({ page }) => {
        const dialogPromise = page.waitForEvent('dialog');
        const clickPromise = page.getByRole('button', { name: 'Click for JS Alert' }).click();
        const dialog = await dialogPromise;
        expect(dialog.type()).toBe('alert');
        expect(dialog.message()).toBe('I am a JS Alert');
        await dialog.accept();
        await clickPromise;
        await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
    });

    test('accept a JavaScript confirm dialog', async ({ page }) => {
        const dialogPromise = page.waitForEvent('dialog');
        const clickPromise = page.getByRole('button', { name: 'Click for JS Confirm' }).click();
        const dialog = await dialogPromise;
        expect(dialog.type()).toBe('confirm');
        expect(dialog.message()).toBe('I am a JS Confirm');
        await dialog.accept();
        await clickPromise;
        await expect(page.locator('#result')).toHaveText('You clicked: Ok');
    });

    test('enter text in a JavaScript prompt', async ({ page }) => {
        const inputText = 'Hello from the Testing Academy';

        const dialogPromise = page.waitForEvent('dialog');
        const clickPromise = page.getByRole('button', { name: 'Click for JS Prompt' }).click();
        const dialog = await dialogPromise;
        expect(dialog.type()).toBe('prompt');
        expect(dialog.message()).toBe('I am a JS prompt');
        await dialog.accept(inputText);
        await clickPromise;
        await expect(page.locator('#result')).toHaveText(`You entered: ${inputText}`);
    });
});
