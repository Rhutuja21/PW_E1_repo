
import { Locator,Page } from "@playwright/test";

class Login{
    //decalre properties
    //constructor will initialize the properties
    //decalre the method
    page:Page
    txtusername:Locator
    txtpassword:Locator
    Btnsubmit:Locator

    constructor(page:Page){
        this.page=page
        this.txtusername=page.getByLabel("Username",{exact:true})
        this.txtpassword=page.getByLabel("Password",{exact:true})
        this.Btnsubmit=page.getByRole("button",{name:"Submit",exact:true})
    }

    async login(url,username,password){
        await this.page.goto(url)
        await this.txtusername.fill(username)
        await this.txtpassword.fill(password)
        await this.Btnsubmit.click()
    }

}

export default Login