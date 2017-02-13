var myArray = [1,2,3,4,"a","b","c","d"];
var people = [
    {name:"Thomas", "Coolness": "Awsome!!!"},
    {name:"Marty", "Coolness": "kinda Cool"},
    {name:"Fred", "Coolness": "A Lame Baby Maker"}
];

function coolMeter(value){
    return value.name +" Is "+ value.Coolness; // cant use people.name it needs to be value since value is a object containing a name
}

function stuff(value){
    if (value >= 0){
        result = value * value;
    }else{
        result = value.toUpperCase();
    }return result;
}


console.log(   myArray.map(stuff)    );
console.log(   people.map(coolMeter)     );
console.log(  people[0].name    );// this is how you would normally get a name
