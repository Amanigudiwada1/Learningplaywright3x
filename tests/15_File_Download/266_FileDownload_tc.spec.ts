import {test, expect, Locator } from '@playwright/test';

test.describe('File upload Demo -TestingAcademy',() => {

    test.beforeEach(async({ page }) =>{
        await page.goto('https://app.thetestingacademy.com/playwright/widgets/upload-download');

    });

    test('demo: Downlaod setInputFiles',async({ page }) => {

        const [staticDownlaod] = await Promise.all([
            page.waitForEvent('download'),
            page.getByTestId('download-static').click()
        ]);
        await staticDownlaod.saveAs(`./out/' + staticDownload.suggestedFilename()`);

    });

});
