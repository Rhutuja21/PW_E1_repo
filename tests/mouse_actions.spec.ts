import {test} from '@playwright/test'

test('mouce actions',async({page})=>{
    //!click()

    //? all optional argyment
    // await page.goto('https://demoapps.qspiders.com/ui/button?sublist=0')
    await page.locator('#btn').click({button:'left',clickCount:1,delay:5000,force:true,timeout:25000})

    //? opt argu --> force
    // await page.goto("https://demoapps.qspiders.com/ui/button/buttonDisabled?sublist=4")
    // await page.locator('#submit').click({force:true})

    //? opt argu --> clickcount
    await page.goto("https://demoapps.qspiders.com/ui/button/buttonDouble?sublist=2")
    // await page.locator('#btn_a').click({clickCount:2})


    // await page.mouse.click(500,400,{})

    //!dblclick()
    await page.locator('#btn_a').dblclick()
    // await page.mouse.dblclick(200,300)
})

test("hover,down,up",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/clickHold?sublist=0")

    await page.locator("#circle").hover()
    let box=await page.locator("#circle").boundingBox()
    console.log(box);
    
    // await page.mouse.move(602.6000366210938,283.7749938964844)
    //!down--> it is used to press the mouse button
    //!up --> it is used to release the currently pressed button

    await page.mouse.down()
    await page.waitForTimeout(5000)
    await page.mouse.up()

    // await page.mouse.move(500,800)
    await page.locator("//section[@class='w-[90%]']")

})


test("move , drag and drop",async({page})=>{
//     await page.goto("https://demoapps.qspiders.com/ui/mouseHover?sublist=0")

//    let box= await page.locator('.w-5.h-5.mt-5.ml-3.cursor-pointer ').boundingBox()
//    console.log(box);

//    await page.mouse.move(box!.x,box!.y)

//    await page.waitForTimeout(5000)

    await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
    await page.getByText("Mobile Charger",{exact:true}).dragTo(page.locator('//div[text()="Mobile Accessories"]/parent::div'))
   

})


test.only("scrolling",async({page})=>{
    // await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical")
    // await page.locator('//input[@type="checkbox"]').scrollIntoViewIfNeeded()
    // await page.locator('//input[@type="checkbox"]').click()


    //!wheel(x,y)
    //?vertical scrolling
    // await page.mouse.wheel(0,1000)
    // await page.mouse.wheel(0,-600)

    //? horizontal scrolling
    await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabHorizontal")
    await page.mouse.wheel(1000,0)
    await page.mouse.wheel(-500,0)

})