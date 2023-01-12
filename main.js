let arrOfNumber = [10, 20, 30, 25, 60, 80];

// let result = arr.find((item)=> item > 20);
// console.log(result);

function calcMaxMin(arr){
    return [Math.max(...arr), Math.min(...arr)];
}

const result = calcMaxMin(arrOfNumber);
[max, min] = result;
console.log(`Max = ${max}, Min = ${min}`);