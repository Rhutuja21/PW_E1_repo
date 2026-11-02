import {test} from "@playwright/test"

test("login module",async({page})=>{
    // await page.goto("https://demoapps.qspiders.com/ui?scenario=")
    // let text=await page.getByText("Register",{exact:true}).textContent()
    // console.log(text);

    // await page.getByAltText("Men jeans",{exact:true})

    // await page.getByTitle("",{exact:true})


    // await page.getByRole("button",{name:"Submit",exact:true}).click()

    await page.goto("https://www.saucedemo.com/")
    await page.getByTestId("username").fill("standard_user")
    


})