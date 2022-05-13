// // Sử dụng Spread Attributes trong ES6
// const cars1 = ["AUDI","BMW","TATA","MERCEDES"];
// const cars2 = [...cars1];
// const cars3 = [...cars1, "NISSAN","TOYOTA","MISUBISI"];
// // console.log(cars1);
// // console.log(cars2);
// console.log(cars3);
// // Sử sread Operator để hợp nhất các mảng.
// const str1 = ["nguyen","dung"];
// const str2 = ["phan","tung",];
// const str3 = ["phuong","chi"];
// const str4 = [...str1,...str2,...str3];
// console.log(str4);
//Sử dụng Spread Operator với các đối tượng
// const cars1 = {
//     Brand : "BMW",
//     Color : "RED"
// }
// const cars2 ={...cars1};
// console.log(cars2);
// //Sử dụng Spread Operator để hợp nhất các đối tượng.
// const cars3 = {
//     brand: "NISAN",
//     color : "blue",
//     year : "2005"
// }
// const cars4 = {...cars1,...cars3};
// console.log(cars4);
//Sử dụng Spread Operator để chia chuỗi thành một mảng chuỗi.
// const names = "nguyendung";
// const  a=[...names];
// console.log(a)
//Sử dụng Spread Operator để cấu trúc lại mảng.
const numbers = [1,2,3,3,4,5,5,5,6,7];
const [,,c,...others] = numbers;
console.log(c);
// console.log(b);
// console.log(c);
// console.log(others);

