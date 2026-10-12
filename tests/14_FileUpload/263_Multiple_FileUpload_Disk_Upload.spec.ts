import { expect, test } from '@playwright/test';

const URL = 'https://www.patternfly.org/components/file-upload/multiple-file-upload/';

test.describe('FileUpload handling', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(URL);
    });

    test('upload multiple files from disk', async ({ page }) => {
        const fileInput = page.locator('div.pf-v6-c-multiple-file-upload input');
        const file1 = 'tests/14_FileUpload/file1.jpg';
        const file2 = 'tests/14_FileUpload/fle2.jpg';

        await fileInput.setInputFiles([file1, file2]);

        const uploadedFileNames = await fileInput.evaluate((input: HTMLInputElement) =>
            Array.from(input.files ?? [], file => file.name),
        );
        expect(uploadedFileNames).toEqual(['file1.jpg', 'fle2.jpg']);
    });
});
