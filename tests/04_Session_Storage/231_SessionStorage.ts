import { chromium } from 'playwright';
import dotenv from "dotenv";

dotenv.config();
// Credentials live in .env (gitignored) — never hardcode them in a public repo.

const VW0_USER = process.env.VW0_USER;
const VW0_PWD = process.env.VW0_PWD;

async function saveSession() {
    if (!VW0_USER || !VW0_PWD) {
        throw new Error("Set VW0_USER and VW0_PWD in the root .env file.");
    }

    const browser = await chromium.launch({ headless: false });
    try {
        const context = await browser.newContext();
        const page = await context.newPage();

        await page.goto("https://app.wingify.com/#/login");

        await page.fill("#login-username", VW0_USER);
        await page.fill("#login-password", VW0_PWD);

        await page.click("#js-login-btn");
        await page.waitForURL(/#\/(dashboard|home)/, { timeout: 15000 });

        await context.storageState({ path: "./user-session.json" });
        console.log("Session saved to user-session.json.");
    } finally {
        await browser.close();
    }
}

saveSession().catch((error) => {
    console.error("Could not save the Wingify session:", error);
    process.exitCode = 1;
});
