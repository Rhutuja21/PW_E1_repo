import {test} from "@playwright/test"

test("standrad dropdown",async({page})=>{

    await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")

    await page.locator('#select3').selectOption({value:"India"})
    /**
     * 1-value attribute
     * 2- label --> visible text
     * 3- index
     */

    await page.locator('#select5').selectOption({label:"Lakshadweep Islands"})

    await page.locator('(//select[@class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"])[3]').selectOption({index:1})

})


test.only("custom dropdown",async({page})=>{
    await page.goto("https://www.amazon.in/s?k=shoes&crid=2CM3Z6UO2MLUR&sprefix=%2Caps%2C1172&ref=nb_sb_ss_recent_1_0_recent")

    await page.locator("#s-result-sort-select").click({force:true})

    await page.locator('//a[@class="a-dropdown-link"]').first().waitFor()

    let options=await page.locator('//a[@class="a-dropdown-link"]').all()

    for(let option of options){
        let text=await option.textContent()
        if(text?.includes('Best ')){
            await option.click()
        }
    }
})