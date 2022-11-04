let arr = [3, 5, -5, -123, 10, 15, -13, 0, 1, -1];

let a = 1;

let b = 0;

let c = arr.filter((filterRange) => filterRange >= a);
let d = arr.filter((filterRange) => filterRange <= b);

console.log(c)
console.log(d)