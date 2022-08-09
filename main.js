/*Number
BigInt
Boolean
String
Symbols
Null
Undefined
Object
Array
*/

// In Number we can use the all integer values and it have a limit of number we can use
//In BigInt we can use the Number for some extends 
//Boolean will return true or false value 
/* */
// let isAlive = true
// if(isAlive){
//     console.log("give full amount of pension");
// }
// else{
//     console.log("give half amount of pension");
// }

//String.. we can use it whenever we need to write a name or a para
// let name  = "Vijay"


//Symbol

// let s1 = Symbol("for desc") //efghjkjhvbnm452
// let s2 = Symbol("for desc" ) // fguijhjddlkmjcn78842

const fName = Symbol("for name")

const person ={
    [fName] : "react",
    lName : "js"
}

person.fName = "Vijay";
console.log(person);


//Null
//where there is an invalid object or there is no value 
//ex arr.__proto__.__proto__.__proto__ => null



//Undefined is a place holder which is placed during declaration and later removed while initialization



//Object ...where we can have properties aand values with named key that we can access easily

//array... where we can have so many values and indexed keys

// console.log(Object.entries(person));



