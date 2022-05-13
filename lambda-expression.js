 let arr = [1,2,3,4,5,6,7,8];
let square = (item) => item*item;
 function arrSq(func,arr) {
     let newarr = [];
     arr.forEach((element) =>{
         newarr.push(func(element))
     })

   return newarr
 }

 console.log(arrSq(square,arr))
 