import { test, expect } from '@playwright/test'


test("click on Make Appointment ", async ({ page }) => {
await page.goto('https://katalon-demo-cura.herokuapp.com/');
await page.getByRole('link', { name: 'Make Appointment' }).click();
await page.getByRole('textbox', { name: 'Username' }).first().click();
await page.getByRole('textbox', { name: 'Password' }).first().click();
await page.getByLabel('Username').click();
await page.getByLabel('Password').click();
await page.getByRole('button', { name: 'Login' }).click();
}
);

