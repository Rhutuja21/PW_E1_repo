import {test} from '@playwright/test'
import excel from "exceljs"
import path from 'path'
test("read data",async()=>{
    let book=new excel.Workbook() //! it is creating a empty workbook
    // await book.xlsx.readFile("C:/Users/rhutuja/Desktop/PW_E1/DDT/excelfile.xlsx")
    await book.xlsx.readFile(path.join(__dirname,"../DDT/excelfile.xlsx"))
    let sheet=await book.getWorksheet("Sheet1")
    // let data=await sheet!.getRow(1).getCell(1).value
    let data=await sheet!.getRow(1).getCell(1).toString()
    console.log(data);
})
test("mutliple set",async()=>{
    let book=new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../DDT/excelfile.xlsx"))
    let sheet=await book.getWorksheet("Sheet2")

    for(let col=1;col<=sheet!.actualColumnCount;col++){  
        for(let row=1;row<=sheet!.actualRowCount;row++){  
            let data=await sheet?.getRow(row).getCell(col).toString()
            console.log(data);
            
        }
    }
})


test.only("for application",async({page})=>{
    let book=new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../DDT/excelfile.xlsx"))
    let sheet=await book.getWorksheet("Sheet3")

    let alldata:any[]=[]
    let headers=sheet?.getRow(1).values //!all headers

    let urlIndex;
    let usernameIndex;
    let passwordIndex;

    if(Array.isArray(headers)){
        urlIndex=headers.findIndex(value=>value==="URL")  //1
        usernameIndex=headers.findIndex(value=>value==="username") //2
        passwordIndex=headers.findIndex(value=>value==="password") //3
    }

    for(let row=2;row<=sheet!.actualRowCount;row++){
        let url=sheet?.getRow(row).getCell(urlIndex).toString()
        let username=sheet?.getRow(row).getCell(usernameIndex).toString()
        let password=sheet?.getRow(row).getCell(passwordIndex).toString()

        alldata.push({
            link:url,
            user:username,
            password:password
        })
        console.log(alldata);
    }
    
    for(let d of alldata){
        await page.goto(d.link)
        await page.getByLabel("Username",{exact:true}).fill(d.user)
        await page.getByLabel("Password",{exact:true}).fill(d.password)
        await page.getByRole("button",{name:"Submit",exact:true}).click()

    }


})
