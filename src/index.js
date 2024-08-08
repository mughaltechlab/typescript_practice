var sales = 123456789;
var course = 'Typescript';
var isPublished = true;
// unknown
var something = 1;
something = 'a';
something = function () { console.log('lonewolf is hunting...'); };
console.log('lonewolf is hunting...');
// any
var level;
level = 1;
level = 'any';
function render(document) {
    console.log(document);
}
// * array
// let digits = [1,2,'3'];
var digits = [1, 2, 3];
var otherArray = [22, 33, '44'];
// digits.forEach(n => n.toFixed)       // gives code completion because it knows the type.
// otherArray.forEach(ota => ota.)      // gives code completion because it knows the type.
// * tuples : A tuple is a typed array with a pre-defined length and types for each index.
var user = ['Lone Wolf', 0, 'Hunting'];
user.push('ending');
