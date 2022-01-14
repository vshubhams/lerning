// Basic Types
let id: number = 5;
let company: string = "Shubham verma";
let isTrue: boolean = true;
let x: any = "Hello";
let age: number;
age = 21;

let ids: number[] = [1, 2, 3, 4, 5, 6];
let arr: any[] = [1, 2, "shubham", true];

//Tuple

let person: [number, string, boolean] = [1, "Shubham", true];

//Tuple Array
let employee: [number, string][];

employee = [
    [1, 'One'],
    [2, 'Two'],
    [3,'Three']
];

// Union
let prodId: string | number;
prodId = 22;
prodId = "shubham";

// Enum
enum Direction1 {
    Up=2,
    Down,
    Left,
    Right
}
console.log(Direction1.Up)
console.log(Direction1.Left)

// Object
// const user: {
//     id: number,
//     name:string
// } = {
//     id: 11,
//     name:"Shubham"
// }

type User = {
    id: number,
    name:string
}

const user: User = {
    id: 1,
    name:"shubham"
}
