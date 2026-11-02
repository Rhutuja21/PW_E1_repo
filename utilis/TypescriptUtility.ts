export function getRandomNumber(
    min:number,
    max:number
){
    return Math.floor(Math.random()*(max-min+1))+min
}

/**
 * math.random()--> it will generate a number between 0 to 1
 * 
 *min number --> 1
 max number --> 10
 */

//0.2445*(10-1+1) //0.2445 * 10 // 2.445
//math.floor(2.445)--> 2
//2 +1-->3

export function getRandomString(
    length:number
){
    return Math.random().toString(36).substring(2,2+length)

}

/**
 * math.random //0.2445
 * tostring(36) //0.as4e
 * length --> 2
 * 
 * substring(startindex,endindex)--> (2,2+length)
 */


export function getCurrentDate(){
    return new Date().toISOString().split("T")[0]
}


export function getTimestamp(){
    return Date.now()
}


export function getDate(
    days:number
){
    let date=new Date()
    date.setDate(date.getDate()+days)

    return date.toISOString().split("T")[0]

}