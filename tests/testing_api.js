const chai = require('chai');
//chai.use(require('chai-json-schema'));

const expect = require('chai').expect;
const apiUnderTest = require('../app/api.js');
const dataTest = require('../data_test/data_testing');
const runtestcases  = require('../test_cases/test_case').testcases;
// const jsonDataTest = require('../file/payload_create_user_swagger.json');
// const schemaResponse = require('../schema/response_getUser_swagger_schema');
//const { before } = require('mocha');

let id ;
describe(runtestcases.description, async() => {

    before(async() =>{
        const datanya = dataTest.dataCreateUser();
        const response = await apiUnderTest.createUser(datanya)    
        //console.log("aa", response)
        id=response.body.id;
        //console.log("bbbb", id)
    });

    // before(function () {
    //     console.log("test");
    // });

    // after(function () {
    // // will be executed
    // });

    it(runtestcases.positive.case1, async() =>{
       // const datas = dataTest.dataCreateUser();
        const response = await apiUnderTest.getUser(id)
        // console.log(response.body)
         console.log(response.status)
        //assertion
        expect(response.body.id).to.equal(id)
    });

    it(runtestcases.negative.case1, async() => {
        const datas = dataTest.dataCreateUser();
       const response = await apiUnderTest.getUser(datas)
       //console.log(response.body)
       console.log(response.status)
      //  assertion
       expect(response.body.id).to.not.equal(datas.id)

    });

    after(async function(){
       // console.log("after")
        const response = await apiUnderTest.removeUser(id)  
      //  console.log(response)
    })

})