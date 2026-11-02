import exceljs from "exceljs"
/**
 * 1- readExcel --> it will read the whole excel file
 * 2-getRowvalues --> it will read a specific row
 * 3- getCellValues --> it will read a specific cell
 * writeExcel --> it will update the existing excel file
 */
export async function readExcel(
    filepath:string,
    sheetname:string
){
    let book=new exceljs.Workbook()
    await book.xlsx.readFile(filepath)
    let sheet=await book.getWorksheet(sheetname)
    let data:any[][]=[]
    sheet!.eachRow((row)=>{
        let rowdata:any[]=[]
        row.eachCell((cell)=>{
            rowdata.push(cell.toString())
        })
        data.push(rowdata)
    })
    return data
}
// [[row1],[row2],[row3]]


export async function getRowValues(
    filepath:string,
    sheetname:string,
    rowNumber:number
){
    let book=new exceljs.Workbook()
    await book.xlsx.readFile(filepath)
    let sheet=await book.getWorksheet(sheetname)
    let row = sheet?.getRow(rowNumber)
    let rowData:any[]=[]
    row?.eachCell((cell)=>{
        rowData.push(cell.toString())
    })
    return rowData
}
export async function getCellValues(
    filepath:string,
    sheetname:string,
    rowNumber:number,
    cellNumber:number
){
    let book=new exceljs.Workbook()
    await book.xlsx.readFile(filepath)
    let sheet=await book.getWorksheet(sheetname)
    let value= sheet?.getRow(rowNumber).getCell(cellNumber).toString()
    return value

}


export async function writeExcel(
    filepath:string,
    sheetname:string,
    rowNumber:number,
    cellNumber:number,
    value:any
){
    let book=new exceljs.Workbook()
    await book.xlsx.readFile(filepath)
    let sheet=await book.getWorksheet(sheetname)
    sheet!.getCell(rowNumber,cellNumber).value=value
    await book.xlsx.writeFile(filepath)
}