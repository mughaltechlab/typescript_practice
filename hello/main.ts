let a: string;
let b: number;
let c: boolean;
let d: any;
let numArr: number[];
let anyArr: any[];

const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

// An enum is a special "class" that represents a group of constants (unchangeable variables).
// enum Color {Red, Green, Blue};

// You can set the value of the first numeric enum and have it auto increment from that:
enum Color {Red = 1, Green, Blue};      // now Red = 1 so Green = 2, and Blue = 3...


// assign unique number values for each enum value. Then the values will not incremented automatically:
enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);

//* :: NOTE: Technically, you can mix and match string and numeric enum values, but it is recommended not to do so. ::
