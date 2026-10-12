import { test, expect } from '@playwright/test';

const URL = 'https://the-internet.herokuapp.com/upload';

test.describe('FileUpload handling', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(URL);
    });

    test('locate FileUpload and upload', async ({ page }) => {
        const filePath = 'tests/14_FileUpload/testdata.txt';
        await page.setInputFiles('#file-upload', filePath);
        await page.click('#file-submit');

        await expect(page.locator('h3')).toHaveText('File Uploaded!');
        await expect(page.locator('#uploaded-files')).toHaveText('testdata.txt');
    });
});

