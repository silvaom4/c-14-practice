// Variable Mutation

let firstName = "Oscar";
let age = 22;


age = 25; 
firstName = "Jamil"

// console.log(firstName + age)

//  Type Coercion

let message = "My age is:" + age;
console.log(message);
console.log(typeof message);

//  Arithmetic Operation & Type Coercion
let result = "10" - 5;
console.log(result, typeof result);

// String Coercion 

let value = true;
value = String(value);
// alert(typeof value);

//Numeric Coercion
// alert("6" / "2");

let str = "123";
let num = Number(str);
// alert(typeof num);
 

 //NaN

 let amount = Number("an arbitrary value instead of a number");
// alert(amount);

// Binary Conversion

// alert(Number(true));
// alert(Number(false));

//Boolean Conversion 
// alert(Boolean(1));
// alert(Boolean(0));

// alert(Boolean("hello")); will spit true 
// alert(Boolean("")); // will spit false

let shoes = null;

if(shoes == false) {
    alert("shoes evaluated as true");
} else {
    console.log("shoes evaluated as false its type is: ", typeof shoes) 
}


// if(shoes){
//     alert("shoes evaluated as true");
// } else {
//     console.log("shoes evaluated as false its type is: ", typeof shoes)
// }
