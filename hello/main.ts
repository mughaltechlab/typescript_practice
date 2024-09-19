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

// ------------ ::  --------------  :: ------------------------------------------------------------------------------------
// ------------ ::  TYPE ASSERTION  :: ------------------------------------------------------------------------------------
// ------------ ::  WHERE WE EXPLICITLY TELLS TYPESCRIPT CONPILER THAT WHICH TYPE OF THIS VARIABLE  :: --------------------
// ------------ ::  --------------  :: ------------------------------------------------------------------------------------

// let message = 'abc';     // this message variable type is string
// let endsWithC = message.endsWith('c');      // we use easily this endsWith method and typescript suggest us after (.) dot ;

let message ;       // now this message variable type is any
message = 'abc';
// :: TWO WAYS OF TYPE ASSERTION ::
let endsWithC = (<string>message).endsWith('c');
let alternativeWay = (message as string).endsWith('c');


//todo :: (51 : 32)  51:15 Arrow Functions::

// ------------------:: inline annotation ::------------------------------

// let drawPoint = (point : number) => {
//     // code...
// }
// let drawPoint = (point : {x : number, y: number}) => {
//     // code...
// }

// --------------------:: INTERFACES ::------------------------------------
interface PointInterface {
    x : number,
    y : number
}

let drawPoint = (point : PointInterface) => {
    // code...
}

/**
 * https://www.youtube.com/watch?v=k5E2AVpwsko&list=PLTjRvDozrdlxAhsPP4ZYtt3G8KbJ449oT&index=1
 * ?    56:54 Classes
 * ?    01:01:22 Objects
 * ?    01:05:31 Constructors
 * ?    01:08:22 Access Modifiers
 * ?    01:11:18 Access Modifiers in Constructor Parameters
 * ?    01:12:58 Properties
 * ?    01:18:15 Modules
 */

