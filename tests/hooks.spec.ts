import {test} from "@playwright/test"



test("test1",async()=>{
    console.log("test 1");
})

test("test2",async()=>{
    console.log("test 2");
})

test("test3",async()=>{
    console.log("test 3");
})


test.beforeAll(async()=>{
    console.log("read the excel data");
    console.log("connect to database");
    console.log("generate test");
})

test.afterAll(()=>{
    console.log("Disconnect database");
    console.log("genearate HTML report");
    console.log("delete temporary data");
})

test.beforeEach(()=>{
    console.log("launch browser");
    console.log("open application /launch the url");
    console.log("login");   
})

test.afterEach(()=>{
    console.log("logout");
    console.log("close broswer");
    console.log("screenshot");  
})


/**
 * beforeAll()
 * 
 * beforeEach()
 * test1
 * afterEach()
 * 
 * beforeEach()
 * test2
 * afterEach()
 * 
 * beforeEach()
 * test3
 * afterEach()
 * 
 * afterAll()
 */