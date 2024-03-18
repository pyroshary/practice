let num1:number = 2;
let num2:number = 3;
let cart: number = num1 + num2;

console.log(cart);

console.log(5-4);

let num:number = 1;

console.log(cart - num);


let apple: number = 10;
let bags: number = 5;
let eachbag: number = apple/bags;
//how many apples can go equally in each bag
console.log(eachbag);

//multiply like square
let car: number = 5;
let totalcar: number = car**2;
console.log(totalcar);


//sharing equal and letting know us how many left
let modulus: number = apple% bags;

console.log(modulus);
let n1 :number= 5;
let n2 :number= 10;

let c: number= --n1  + ++n2 + ++n1 + --n2 ;
console.log(c);


//double variable
let results = 5 + 5*2;
console.log(results);


//checking BMI calcultor

let weightinkg = 70;
let heightinmeters = 2.2 ;
let total = weightinkg/(heightinmeters*heightinmeters);
console.log(total);

//assigment oprator

let cl = 5;
cl +=5
cl +=5
cl *=5
console.log(cl);


//loical operators

let A = 5;
let B = 10;
//&& will show true when both conditons will be right
 console.log((A < B) && (A>B));
// || will show true when atleast one conditon will be right
 console.log((A < B) || (A>B));
// ! will show true when condition will be wrong
 console.log(!(A < B));