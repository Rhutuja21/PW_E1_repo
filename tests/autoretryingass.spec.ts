import {test,expect} from '@playwright/test'
import { execPath } from 'process'

test("auto retrying",async({page})=>{

    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")

    //check wheather the username TF is visible
    await expect(page.locator("#me")).toBeVisible()

    await page.locator("#name").fill("rhutuja")
})

test("auto2",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")

    // //validate the page title
    // await expect.soft(page).not.toHaveTitle("DemoApps | Qspiders |")
    // //validate the page url
    // await expect.soft(page).toHaveURL("https://demoapps.qspiders.com/ui?sce")
    // //validate the textbox value
    // await page.locator('#name').fill("username")
    // await expect.soft(page.locator('#name')).toHaveValue("user")
    
    
    // let btntext=await page.getByText("Register",{exact:true}).last().textContent()
    // await expect(btntext).toBe('Register')

    await page.waitForTimeout(3000)
    let title= await page.title()
    let url=await page.url()
    let text=await page.getByText("Register",{exact:true}).first().textContent()
    console.log(title);
    

    await expect(title).toContain("DemoApps | Qspiders")
    await expect(url).toMatch(/scenari/)
    await expect(text).toEqual("Regist")

})



test("assymetric matchers",async({page})=>{
    // await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    // // let buttonText=await page.locator('//bon').textContent()
    // let buttonText=null

    // // await expect(buttonText).toEqual(expect.stringContaining("R"))
    // // await expect(buttonText).toEqual(expect.stringMatching("R"))
    // // await expect(buttonText).toEqual(expect.stringMatching(/R/))
    // await expect(buttonText).toEqual(expect.anything())

    let fruits=["apple","banana","cherry","orange",'mango']

    // await expect(fruits).toEqual(expect.arrayContaining(["apple","orange","lichi"]))
    await expect(fruits).toEqual(expect.any(Array))

    let user={
        id:101,
        name:"john",
        city:"bangalore"
    }

    await expect(user).toEqual(expect.objectContaining({
        id: expect.any(Number)
    }))
    // await expect(user).toEqual({
    //     id: expect.any(Number),
    //     name: expect.any(String),
    //     city:expect.any(String)
    //     })
})


test.only("poll assertion",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")

    // await expect.poll(async()=>{
    //     return await page.title()
    // }).toContain("Demo")

    let fruits=["apple","banana","cherry","orange",'mango']

    // await expect(fruits).toEqual(expect.arrayContaining(["apple","orange","lichi"]))
    await expect(fruits,"error").toEqual(expect.any(Array))


})