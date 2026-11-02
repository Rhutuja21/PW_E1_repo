import {test} from "@playwright/test"

test('dialogs',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    // page.on("dialog",async(d)=>{
    //     if(d.type()=="alert"){
    //         await d.accept()
    //         console.log(await d.message());
            
    //     }
    //     else if(d.type()=='confirm'){
    //         await d.dismiss()
    //         console.log(await d.message());

    //     }
    //     else if(d.type()=='prompt'){
    //         await d.accept("tommy")
    //         console.log(await d.message());

    //     }

    // })
    page.once("dialog",async(d)=>{
        await d.accept()
    })

    await page.getByRole("button",{name:"Simple Alert",exact:true}).click()

    page.once("dialog",async(d)=>{
        await d.accept()
    })
    await page.getByRole("button",{name:"Confirmation Alert",exact:true}).click()

    page.once("dialog",async(d)=>{
        await d.accept()
    })
    await page.getByRole("button",{name:"Prompt Alert",exact:true}).click()

})