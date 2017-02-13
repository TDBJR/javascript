var fs = require("fs")// this is how you open text files
//from fs import 'fs'

var output = fs.readFileSync("C:/data.txt","utf8")
.trim()// deletes any whitespace after the last character of the txt file.

.split('\n')// spliting on new line

.map(function(value){// "\t" wasn't working so i just split of 4 spaces
 return value.split("    ");
})
               //customers is the new variable reduce is making for you to do stuff to. Can be named anything
.reduce(function(customers,line){//line is each array being passed in by map.

    console.log(customers,line)//loging the items as they come in and get altered

    customers[line[0]] = customers[line[0]] || []// creates a array [] or if it has been created already it rewrites it customers[line[0]]
    /* var customers['mark johansson'][0] = [] this creating a entirely new object
    and defining a new attribute  with the value of the first array item. in this case a name. each time it loops in another array that
    starts with the name 'mark johansson' it just overwrites the old value of the 'mark johansson' attribute
    when it finally finds a new array with a different first value 'Nikita Smith' it creates it instead of
    overwiting so the item customers is created then it gives it a object with the value set to a array { 'mark johansson': []}*/

    /*line is the object array. name, item, cost, amount. this is pushing a array of items into a object named after the first array entry*/
    customers[line[0]].push({
        Item:line[1],
        price:line[2],
        quantity:line[3]
    })
    return customers
}, {})// this is where you define what the cusetomers/new variable is, in this case we set it to a object.

console.log(   "OUTPUT!: ",output    );
console.log(   "OUTPUT!: ",JSON.stringify(output,null,2)    );
