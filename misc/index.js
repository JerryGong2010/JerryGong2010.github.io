// let name1='Jerry';
// console.log(name1);

//variables are case-sensitive
// cannot be a reserved keyword
//cannot start with a number (1name)
//cannnot contain a space or hyphen (-)
// let firstName='Jerry';
// let lastName='Gong';

// console.log(firstName);
// let interestRate=0.3;
// interestRate=1;
// console.log(interestRate);

// let myName='Jerry';  //String Literal
// let age=30; // Number Literal
// let isApproved=true; // Boolean Literal
// let first=undefined;  // undefined
// let selectedColor=null; //  null

// Dynamic Typed - the value of a variable can be changed/altered
// typeof myName;

// Reference Types: Objects, array, function
let person={
    firstName: 'Jerry',
    age: 30
};

// Dot Notation
person.firstName='Vy';

//Bracket Notation
let selection='firstName';  // i.e., user can input a firstName value
person[selection]='Lewis';

console.log(person.firstName);

// array
let selectedColors=['red','blue'];
selectedColors[2]=1;
console.log(selectedColors[0]);
console.log(selectedColors);
console.log(selectedColors.length);

//function
function greet(Name,lastName){   // Name is a parameter
    console.log('Hello '+Name+' ' +lastName);
}   //define a function

greet('Jerry');  // statement to call the function
                 //'Jerry' is an agrument
greet('Vy');

greet('Jerry', 'Gong');

//calculating a value
function square(number){
    return number*number;
}

let number = square(2);
console.log(number);

console.log(square(3));
