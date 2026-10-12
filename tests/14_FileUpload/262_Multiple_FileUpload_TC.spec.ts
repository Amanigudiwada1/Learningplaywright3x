import { test, expect } from '@playwright/test';

const URL = 'https://www.patternfly.org/components/file-upload/multiple-file-upload/';

test.describe('FileUpload handling', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(URL);
    });

    test('locate FileUpload and upload', async ({ page }) => {
        const fileUpload = page.locator('div.pf-v6-c-multiple-file-upload input');
        await fileUpload.setInputFiles([
            {
                name: 'file1.jpg',
                mimeType: 'image/jpeg',
                buffer: Buffer.from('file content'),
            },
            {
                name: 'file2.jpg',
                mimeType: 'image/jpeg',
                buffer: Buffer.from('this is test file 2 content'),
            },
        ]);

        const uploadedFileNames = await fileUpload.evaluate((input: HTMLInputElement) =>
            Array.from(input.files ?? [], file => file.name),
        );
        expect(uploadedFileNames).toEqual(['file1.jpg', 'file2.jpg']);
    });
});
