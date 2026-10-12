import { test, expect,Locator} from '@playwright/test'; 

test('verify the Testcase',async ({ page }) =>{

    await page.goto ("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    //code

    await page.pause();

});
