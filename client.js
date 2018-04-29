/*
 * @Author: Laphets
 * @Date: 2018-04-22 00:42:03
 * @Last Modified by: Laphets
 * @Last Modified time: 2018-04-27 23:35:57
 */

const PROTO_PATH = __dirname + '/protos/zju_intl.proto';
const grpc = require('grpc');

let protoDescriptor = grpc.load(PROTO_PATH);
let zjuintl = protoDescriptor.zjuintl;

let client = new zjuintl.ZJUintl(require('./config').port, grpc.credentials.createInsecure());

const user = require('./config').test_user;


// Code for connect test
// client.connect_test({name: 'lapehts'}, (err, response) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(response);
//     }
// });

//Code for get course(time table)
client.getCourse({ username: user.username, password: user.password }, (err, response) => {
    if (err) {
        console.log(err);
    } else {
        console.log(response);
    }
})

// client.getBBGradeList({ username: user.username, password: user.password }, (err, response) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(response);
//     }
// });

// client.getBBCertainGrade({ username: user.username, password: user.password, courseid: user.courseid }, (err, response) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(response);
//     }
// })