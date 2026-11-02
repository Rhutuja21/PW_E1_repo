import {test} from "@playwright/test"

test("frame",async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")

    // await page.locator('//input[@name="mytext1"]').fill("hiiii")
    //!approach 1---> frameLocator()

    // let frame1=await page.frameLocator('//frame[@src="frame_1.html"]')
    // await frame1.locator('//input[@name="mytext1"]').fill("hiiii")

    // await page.waitForTimeout(3000)

    //!Approach 2--------- contentFrame()

    // let frame2=await page.locator('//frame[@src="frame_2.html"]').contentFrame()
    // await frame2.locator('//input[@name="mytext2"]').fill("hello")

    // await page.waitForTimeout(3000)


    //!-------nested frames------------
    let frame3=await page.frameLocator('//frame[@src="frame_3.html"]')

    let iframe=await frame3.frameLocator('//iframe')
    await iframe.locator('(//div[@class="AB7Lab Id5V1"])[2]').check()
})