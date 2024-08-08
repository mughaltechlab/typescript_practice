let sales: number = 123_456_789;
let course: string = 'Typescript';
let isPublished: boolean = true;

// unknown
let something: unknown = 1;
something = 'a';
something = ()=>{console.log('lonewolf is hunting...')};
console.log('lonewolf is hunting...');

// any
let level;
level = 1;
level = 'any';

function render(document: any){
    console.log(document);
}

// * array
// let digits = [1,2,'3'];
let digits: number[] = [1,2,3];
let otherArray: any[] = [22,33,'44'];

// digits.forEach(n => n.toFixed)       // gives code completion because it knows the type.
// otherArray.forEach(ota => ota.)      // gives code completion because it knows the type.

// * tuples : A tuple is a typed array with a pre-defined length and types for each index.

let user: [string, number, string] = ['Lone Wolf',0,'Hunting'];
user.push('ending');

// define readonly tuple
let admin: readonly[string, number];
admin = ['Joe', 921113769];
// admin.push(1)  // property 'push does not exist on type 'readonly [string, number] '

// * Enums
