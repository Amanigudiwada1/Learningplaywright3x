import { expect, test } from '@playwright/test';

const URL = 'https://www.patternfly.org/components/file-upload/multiple-file-upload/';

test.describe('File upload from another directory', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(URL);
    });

    test('upload files from the shared test-data directory', async ({ page }) => {
        const uploadInput = page.locator('div.pf-v6-c-multiple-file-upload input');
        await uploadInput.setInputFiles([
            'test-data/uploads/sample.pdf',
            'test-data/uploads/sample.jpg',
            'test-data/uploads/sample.doc',
        ]);

        const uploadArea = page.locator('div.pf-v6-c-multiple-file-upload');
        await expect(uploadArea).toContainText('sample.pdf');
        await expect(uploadArea).toContainText('sample.jpg');
        await expect(uploadArea).toContainText('sample.doc');
    });
});
