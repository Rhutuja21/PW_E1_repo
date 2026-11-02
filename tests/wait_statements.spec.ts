import {expect, test} from "@playwright/test"
import { realpathSync } from "fs"
// test.use({
//     actionTimeout:15000
// })

test("auto_waits",async({page})=>{
    // await page.setDefaultTimeout(20000)
    await page.goto("https://practicetestautomation.com/practice-test-login/")

    await page.getByLabel("Username",{exact:true}).fill("student",{timeout:20000})
    await page.waitForTimeout(3000)

    await page.getByLabel("Password",{exact:true}).fill("Password123")

    await page.getByRole("button",{name:"Submit",exact:true}).click()

})


test("element_based_waits",async({page})=>{

    await page.goto("https://www.amazon.in/")

    await page.getByPlaceholder("Search Amazon.in",{exact:true}).fill("shoes")

    // await page.locator('.s-suggestion-container').first().waitFor({state:"visible",timeout:20000})

    await page.waitForSelector('.s-suggestion-container')

    let values=await page.locator('.s-suggestion-container').allTextContents()

    console.log(values);
    

})

test("page_based_waits",async({page})=>{
    //launch the browser
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")

    //click on check box link
    // await Promise.all([
    //     page.waitForNavigation(),
    //     page.getByText('Check Box',{exact:true}).click()

    // ])

    await Promise.all([
        page.waitForURL("https://demoapps.qspiders.com/ui/checkbox"), //expected url.url pattern,regex
        page.getByText('Check Box',{exact:true}).click()

    ])
    

    await page.waitForLoadState("load")
    //!bydefault it will take the state as "load"

    //? load ==> waits until the HTML page,css,js,images,animations,other resources

    //?domcontentloaded --> waits until the HTML page is loaded, it will not wait for other resources

    //? networkidle--> wait until there no network request for 500ms --> rarely used

    //fetch the current page url
    let newURl=await page.url()
    console.log(newURl);

    // await expect(page).toHaveURL("https://demoapps.qspiders.com/ui/checkbox")


})

test('waitforevent',async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")

    await page.getByPlaceholder("Enter text here",{exact:true}).fill("hello file downloading....")

    let [downloadfile]=await Promise.all([
        page.waitForEvent("download"),
        page.getByRole("button",{name:"Download",exact:true}).click()
    ])

    console.log(await downloadfile.path());
})


//! custom waits

test.only("custom waits",async({page})=>{
    await page.goto("https://www.amazon.in/")

    //? custom waits
    await page.waitForFunction(()=>{
        return document.readyState==="complete"
    })

    await page.locator('input#twotabsearchtextbox').fill("shoes")

    //?custom waits
    await page.waitForFunction(()=>{
        let ele=document.querySelectorAll('.s-suggestion-container')
        return ele.length>1
    })

})
