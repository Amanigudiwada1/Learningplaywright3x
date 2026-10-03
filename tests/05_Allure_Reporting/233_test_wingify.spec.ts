import { test, expect } from '@playwright/test';



test.beforeEach(async ({ page }) => {

});

test('go directly to dashboard without login-test1', async ({ page }) => {
    await page.goto('https://app.wingify.com/#/dashboard');
    await expect(page).toHaveURL(/dashboard/);
    console.log("dashboard page loaded successfully- no login needed");
    await page.waitForTimeout(3000);
});

test('go directly to dashboard without login-test2', async ({ page }) => {
    await page.goto('https://app.wingify.com/#/dashboard');
    await expect(page).toHaveURL(/dashboard/);
    console.log("dashboard page loaded successfully- no login needed");
    await page.waitForTimeout(3000);
});

test('go directly to dashboard without login-test3', async ({ page }) => {
    await page.goto('https://app.wingify.com/#/dashboard');
    await expect(page).toHaveURL(/dashboard/);
    console.log("dashboard page loaded successfully- no login needed");
    await page.waitForTimeout(3000);
});