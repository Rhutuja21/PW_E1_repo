import {test} from "@playwright/test"

test("keyboardactions",async({page})=>{
    /**
     * 1- insertText()
     * 2- type()
     * 3-down()
     * 4- up()
     * 5- press()
     */

    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    await page.getByLabel("Name",{exact:true}).click()
    // await page.keyboard.insertText("poulomi")
    await page.keyboard.type("poulomi")

    await page.keyboard.down("Tab")
    await page.keyboard.up("Tab")
    // await page.keyboard.press("Control+C")


})