let sales: number = 123_456_789;
let course: string = 'Typescript';
let isPublished: boolean = true;

// any
let level;
level = 1;
level = 'any';

function render(document: any){
    console.log(document);
}

// array
// let digits = [1,2,'3'];
let digits: number[] = [1,2,3];
let otherArray: any[] = [22,33,'44'];

// digits.forEach(n => n.toFixed)       // gives code completion because it knows the type.
// otherArray.forEach(ota => ota.)      // gives code completion because it knows the type.