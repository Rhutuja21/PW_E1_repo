import {test} from "@playwright/test"
import path from "path"

test("upload files",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    //!------single file upload
    await page.locator('#singleFileInput').setInputFiles("C:/Users/rhutuja/Desktop/PW_E1/uploadfile/demo.txt")

    await page.locator("#singleFileInput").setInputFiles("C:/Users/rhutuja/Desktop/Playwright_Typescript_batch_notes/Wait Statements_Notes.pdf")

    await page.locator('#singleFileInput').setInputFiles(path.join(__dirname,"../uploadfile/demo.txt"))
    // console.log(__dirname);

    await page.getByRole("button",{name:"Upload Single File"}).click()

    //! -------upload multiple file--------
    await page.locator('#multipleFilesInput').setInputFiles([path.join(__dirname,"../uploadfile/demo.txt"),path.join(__dirname,"../uploadfile/upload.txt")])

    await page.getByRole("button",{name:"Upload Multiple Files"}).click()

})