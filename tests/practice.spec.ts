import {test} from '@playwright/test' 
test("webelements actions", async({page})=>{ 
    await page.goto("https://www.olympics.com/en/olympic-games/tokyo-2020") 
    await page.locator("//p[.='See table']").click() 
    await page.locator("//a[contains(@href,'/en/olympic-games/') and .='Athletes']").click() 
    let medal=await page.locator("//h3[.='Emma MCKEON']/../../../../..//div[@data-medal-id='gold-medals-2']").innerText(); 
    console.log(medal)
 await page.close() })