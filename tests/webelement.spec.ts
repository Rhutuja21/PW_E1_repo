import {test} from "@playwright/test"

test("webelement_controls",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.getByPlaceholder("Enter Name",{exact:true}).fill("student")
    let value=await page.getByPlaceholder("Enter Name",{exact:true}).inputValue()
    console.log(value);
    


    // await page.getByPlaceholder("Enter EMail",{exact:true}).type("student@gmail.com")

    // await page.getByPlaceholder("Enter Name",{exact:true}).fill("demo")
    // await page.getByPlaceholder("Enter EMail",{exact:true}).type("demo@gmail.com")

    // await page.getByRole("button",{name:"START",exact:true}).click()
    // await page.click("button.start")

    // console.log(await page.locator("h1.title").innerText());
    
    // let text=await page.textContent("h1.title")
    // console.log(text);

    
    console.log(await page.locator(".title").allTextContents());
    
    let texts=await page.locator(".title").allInnerTexts()
    console.log(texts);
    
    

})

test.only("example",async({page})=>{
    // await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    // // await page.waitForTimeout(1000)
    // // let value=await page.locator("#name")
    // // await value.waitFor({timeout:25000,state:"visible"})
    // // console.log(await value.isVisible());   

    // // let text=await page.locator("#name").getAttribute("class")
    // // console.log(text);

    // await page.locator('//li[@class="no-use relative hover:bg-orange-50"]/descendant::section[@class="poppins text-[14px]"]').nth(1).waitFor()
    // let a1=await page.locator('//li[@class="no-use relative hover:bg-orange-50"]/descendant::section[@class="poppins text-[14px]"]').all()
    // console.log(a1);

    
    

    
})