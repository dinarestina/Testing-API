const httpLib = require('supertest');
const serverAPI = httpLib('http://localhost:1234/v1');

async function createUser(data) {
    const temp = await serverAPI
        .post('/users')
        .set('Authorization', 1234)
        .send(data);
  ///      console.log('lallal', temp)
        return temp;
}

async function getUser(id) {
   // console.log(id)
    const temp = await serverAPI
        .get(`/users/${id}`)
     //   .set('Authorization', 1234);
   // console.log("acbd",temp)
    return temp;
}

async function removeUser(id){
  //  console.log(id)
    const temp = serverAPI
        .delete(`/users/${id}`)
   // console.log(temp)
    return temp
}

module.exports = {
    getUser,
    createUser,
    removeUser
}