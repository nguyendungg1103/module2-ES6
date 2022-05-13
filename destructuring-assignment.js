// let names = ["alpha", "beta", "gamma", "delta"];
// let [fistName,secondName,...orther]=   names;
// // console.log(fistName);
// console.log(orther);
// let [fistName,second,...other] = ["alpha", "beta", "gamma", "delta"];
// console.log(fistName)
// console.log(second);
// console.log(other);
// let [fistName,,...lastName] = ["alpha", "beta", "gamma", "delta"];
// console.log(lastName)
// các giá trị cũng có thể bị hoán  bằng cách sử  destructuring assingment;
// let [firstName, secondName] = ["alpha", "beta", "gamma", "delta"];
//
// // console.log(firstName);//"alpha"
// // console.log(secondName);//"beta"
//
// //After swapping
// [firstName, secondName] = [secondName, firstName]
//
// console.log(firstName);//"beta"
// // console.log(secondName);//"alpha"
// function NamesList() {
//     return ["alpha", "beta", "gamma", "delta"]
// }
// let [firstName, secondName] = NamesList();
//
// // console.log(firstName);//"alpha"
// console.log(secondName);//"beta"
// // gán các biến từ các đối tượng:
// let masks ={x:21,y:-34,z:47};
// let x = masks.x;
// let x = masks.y
// let x =
const marks = {
    section1: { alpha: 15, beta: 16},
    section2: { alpha: -31, beta: 19 }
};

const {section2 :{alpha :alpha2,beta:beta2}}=marks;
console.log(alpha2,beta2)





