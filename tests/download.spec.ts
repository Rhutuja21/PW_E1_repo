import {test,expect} from '@playwright/test'
import path from 'path'
import fs from 'fs'  //!file system

test("download file",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
    await page.getByPlaceholder("Enter text here",{exact:true}).fill("my downloaded file")
    await page.locator("#fileName").fill('newfile.txt')
    let [downloadfile]=await Promise.all([
        page.waitForEvent("download"),
        page.getByRole('button',{name:"Download",exact:true}).click()
    ])
    // console.log(await downloadfile.path());
    // let downloadFolder="C:/Users/rhutuja/Desktop/PW_E1/downloadssss"
    let downloadFolder="C:/Users/rhutuja/Desktop/newdownload"
    let filename=await downloadfile.suggestedFilename()

    await downloadfile.saveAs(path.join(downloadFolder,filename))
    let filepath=path.join(downloadFolder,filename)
    let data=await fs.readFileSync(filepath,'utf-8')

    await expect(data).toContain("my downloaded")
})