import {test,expect} from "@playwright/test"

test("demo",async({page})=>{
    await page.goto("https://www.amazon.in/")
    
    console.log("hii");
})

// test("demo1",()=>{
//     console.log("hii");
// })

// test("demo2",()=>{
//     console.log("hii");
// })




