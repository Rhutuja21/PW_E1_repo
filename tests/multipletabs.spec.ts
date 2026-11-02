import {test,expect} from "@playwright/test"

test("multiple tabs",async({browser})=>{
    let context=await browser.newContext()
    let page1=await context.newPage()
    await page1.goto("https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1")

    let page2=await context.newPage()
    await page2.goto("https://www.amazon.in/")

})


test("new tab",async({browser})=>{
    let context=await browser.newContext()
    let page=await context.newPage()

    await page.goto("https://demoapps.qspiders.com/ui/browser/newTab?sublist=1")

    let [page2]=await Promise.all([
        page.waitForEvent("popup"),
        page.getByRole("button",{name:"view more",exact:true}).first().click()
    ])

    await page2.getByRole("button",{name:"Add to Cart",exact:true}).click()

    let cart=await page2.locator("//article").last()
    let cartcount=parseInt(await cart.textContent() || "0")

    await expect(cartcount).toBeGreaterThan(0)

})


test.only("new window",async({browser})=>{
    let context=await browser.newContext()
    let page=await context.newPage()
    await page.goto("https://demoapps.qspiders.com/ui/browser?sublist=0")

    let [window2]=await Promise.all([
        page.waitForEvent("popup"),
        page.getByRole('button',{name:"view more"}).last().click()
    ])

    await window2.getByRole("button",{name:"Add to Cart",exact:true}).click()

    let cart=await window2.locator("//article").last()
    let cartcount=parseInt(await cart.textContent() || "0")

    await expect(cartcount).toBeGreaterThan(0)

})