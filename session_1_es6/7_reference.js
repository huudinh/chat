var x = 10;
var y = 'abc';
var z = null;

var x = 10;
var y = 'abc';
var a = x;
var b = y;
console.log(x, y, a, b); // -> 10, 'abc', 10, 'abc'

var reference = [1];
var refCopy = reference;

reference.push(2);
console.log(reference, refCopy); // -> [1, 2], [1, 2]

var obj = { first: 'reference' };
obj = { second: 'ref2' }

var arrRef = ['Hi!'];
var arrRef2 = arrRef;
console.log(arrRef === arrRef2); // -> true

var arr1 = ['Hi!'];
var arr2 = ['Hi!'];
console.log(arr1 === arr2); // -> false

var arr1str = JSON.stringify(arr1);
var arr2str = JSON.stringify(arr2);
console.log(arr1str === arr2str); // true