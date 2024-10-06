const fn1 = (a, b) => a + b;
const fn2 = (a, b) => a - b;

exports.sub = fn2;
exports.sum = fn1;

/*
const lib = require('./module-1.js');

console.log(lib)  // { sum: [Function: sum], sub: [Function: sub] }
console.dir({lib}) // { lib: { sum: [Function: sum], sub: [Function: sub] } }

fn1 = lib.sum
fn2 = lib.sub

console.log(fn1(5,3)) // 8
console.log(fn2(5,3)) // 2
*/
// or
/*
const { sum, sub } = require('./module-1.js');

console.log(sum(5, 3)); // 8
console.log(sub(5, 3)); // 
*/

// or
/*
const { sum: Mysum, sub: Mysub } = require('./module-1.js');

console.log(Mysum(5, 3)); // 8
console.log(Mysub(5, 3)); // 2
*/