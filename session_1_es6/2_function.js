//standard
function sum(a, b){
    return a + b;
}

console.log('sum', sum(1, 2));

//anonymous function as variable
const sub = function(a, b){
    return a - b;
};

console.log('sub', sub(2, 1));

//ES6 - arrow function
const mutiply = (a, b) => {
    return a * b;
};

console.log('mutiply', mutiply(1, 2));

//shorthanded arrow function
const divide = (a, b) => a / b;
console.log('divide', divide(2, 1));

//mathematics operation
const pow = (a, b) => a ** b;
console.log('pow', pow(3, 2));



