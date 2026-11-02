import {test} from "@playwright/test"
import Login from "../PageObjectModel/loginpage.page"
import data from "../DDT/login.json"

test("pom properties",async({page})=>{
    let LoginPage=new Login(page)
    for(let testdata of data.valid){
    //     await page.goto(testdata.url)
    //     await LoginPage.txtusername.fill(testdata.username)
    //     await LoginPage.txtpassword.fill(testdata.password)
    //     await LoginPage.Btnsubmit.click()
        await LoginPage.login(testdata.url,testdata.username,testdata.password)
    }
})