import {test} from "@playwright/test"
import { getCurrentDate, getDate, getRandomNumber, getRandomString, getTimestamp } from "../utilis/TypescriptUtility";

test("typescript utility",async()=>{

    console.log(getRandomNumber(5000000000,10000000000));
    // console.log(getRandomString(2));

    let data=getRandomString(5)
    console.log(data+'@gmail.com');

    console.log(getCurrentDate());

    console.log(getTimestamp());

    console.log(getDate(-5));
    
    
    
    
    
})