let num1 = prompt("Enter the number 1: ");
let num2 = prompt("Enter the number 2: ");

console.log("Before");
console.log(`a: ${num1}`);
console.log(`b: ${num2}`);

// swap using destructuring
[num1, num2] = [num2, num1];

console.log("After");
console.log(`a: ${num1}`);
console.log(`b: ${num2}`);



// let obj = {a:10, b:20}
// // swapping using function passing by reference
// function swapToNumbers(obj){
//     let temp = obj.a;
//     obj.a = obj.b;
//     obj.b = temp;
// }

// swapToNumbers(obj);
// console.log(`a: ${obj.a}`);
// console.log(`b: ${obj.b}`);