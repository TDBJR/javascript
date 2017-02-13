/*filter loops its variables into a function one at a time expecting a true or false return and will create
a array with all values that were returned with true statments */


var myArray = [1,2,3,4,"a","b","c","d"];

function findStuff(array){
    return array > 0; // is returning true or false for each looped in value true are added, false are ignored.
}

console.log(   myArray.filter(findStuff)    );
console.log(       );

// [ 1, 2, 3, 4 ]  returns values greater than 0
