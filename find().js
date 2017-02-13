/*find loops its variables into a function one at a time expecting a true or false return and will return the first
and only the first value with a true statment as a single value*/


var myArray = [1,2,3,4,"a","b","c","d"];

function findStuff(array){
    return array > 0; // is returning true or false for each looped in value true are added, false are ignored.
}

console.log(   myArray.filter(findStuff)    );
console.log(   myArray.find(findStuff)    ); //  1 returns the first value greater than 0
