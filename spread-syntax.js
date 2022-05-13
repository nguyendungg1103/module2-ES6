// function sum(x,y,z) {
//     return x+y+z;
//
// }
// const numbers=[1,3,5];
// // console.log(sum.apply(null,numbers))
// console.log(sum(...numbers))

// var a = [1,2];
// a.push([1,2,3]);
// console.log(a)
// var a = [1,2];
// a.push.apply(a,[1,2,3]);
// console.log(a)
// sao chép một Mảng
var a = [1, 2];
var b= [1,2,3];
a.push(...b)
console.log(a);
//sao chép một đối tượng.
var a = {x:1,y:2}
var b = {...a}

console.log(a)
//nối 2 mảng với nhau:
var a = [1, 2];
var b= [1,2,3];
var c= [...a,...b];
console.log(c)
