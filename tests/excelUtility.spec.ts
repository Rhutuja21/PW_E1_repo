import {test} from "@playwright/test"
import { getCellValues, readExcel, writeExcel } from "../utilis/excelUtility"
import { getRowValues } from "../utilis/excelUtility"

test('excel utility',async()=>{
    // let value=await readExcel("C:/Users/rhutuja/Desktop/PW_E1/DDT/excelfile.xlsx","Sheet2")

    // console.log(value);

    let value=await getRowValues("C:/Users/rhutuja/Desktop/PW_E1/DDT/excelfile.xlsx","Sheet2",2)

    console.log(value);


    console.log(await getCellValues("C:/Users/rhutuja/Desktop/PW_E1/DDT/excelfile.xlsx","Sheet2",2,1));

    await writeExcel("C:/Users/rhutuja/Desktop/PW_E1/DDT/excelfile.xlsx","Sheet2",2,1,"playwright")
    
    


    

})