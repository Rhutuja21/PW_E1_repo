//! related reuseable JSON method
import fs from "fs"  //? file system

export async function readJSON(
    filepath:string
){
    return JSON.parse(fs.readFileSync(filepath,"utf-8"))

}

//JSON.parse --> it will convert the JSON string in javascript object