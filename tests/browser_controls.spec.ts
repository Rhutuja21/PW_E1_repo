import {chromium, firefox, test} from "@playwright/test"

test("browser control",async()=>{
    let browser=await chromium.launch()
    let context=await browser.newContext()
    let page=await context.newPage()
    await page.goto("https://www.google.com/")

    let viewport=await page.viewportSize()
    console.log(viewport);

    await page.setViewportSize({width:1200,height:600})

    let viewport1=await page.viewportSize()
    console.log(viewport1);

    console.log(await page.title());
    console.log(await page.url());
    console.log(await context.cookies())
    await page.screenshot() //buffer screenshot --> node(temporary) 

    await page.close()
    await context.close()
    await browser.close()

})