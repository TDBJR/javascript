/* Both filter and indexOf loop their variables and you can combine them
to loop the variables of both against each other. filter will loop in the
array and indexOf will loop in the arguments so everything gets compaired */


function destroyer(arr) {
  var result = "";
  var args = Array.prototype.slice.call(arguments);
  args.splice(0, 1);

 result = arr.filter(function(value){
   return args.indexOf(value) ===-1;
 }) ;
  return result;
}
console.log(destroyer([ 2, 3,  2, 3, 5], 2, 3));
