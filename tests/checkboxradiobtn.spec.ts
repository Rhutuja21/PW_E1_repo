import {test} from "@playwright/test"

test("checkbox nad radio button actions",async({page})=>{
    //!checkbox actions
    /**
     * 1- check() --> it will check the checkbox/radio button
     * 2- uncheck()--> it will uncheck the checkbox/radio button
     */

    await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0")
    await page.locator('#domain_a').check()
    await page.locator('#domain_b').check()
    await page.locator('#domain_a').uncheck()

})