// Rule # 1 in javascript when assigning variables is everything to the right of = happens first so you can assign a variable to a loop
// return.


function destroyer(arr) {
// turning all arguments into a array   
  var args = Array.prototype.slice.call(arguments);
 //removing the first argument from the array which is [2,3,2,3,5] args now = [2,3] the arguements after the array
  args.splice(0, 1);
  // building a function inside of filter
  return arr.filter(function(value) {// filter will loop though its variable sending each value to the function and expects a true/false return
// indexOf loops though it's variable and looking for the value passed in. if it finds the value it will save the index posistion location.  If it finds "Sam" at args[0]
    return args.indexOf(value) === -1; // "Sam" now holds the index of 0. If indexOf finds another "Sam" at args[4] it doesnt index it.
/* if args === value it returns the index it was in args so 0 1 2 3 4 it will only return -1 if there is no match so  value === -1 is either true or false.
 filter expects a true or false return and if it gets true the current value is appended to the variable if false then it does not. 
 arg will cycle 2 and 3 trying to find a match in value which will be a value from the array [2,3,2,3,5] each value will be looped in by filter
 variable.filter loops its variable and index of loops its variable comparing all values.
 */
  });
  
}

console.log(destroyer([ 2, 3,  2, 3,5], 2, 3));


