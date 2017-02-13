/*    */

var orders = [
    {amount: 250},
    {amount: 400},
    {amount: 100},
    {amount: 325}
]                                     // sumValue adds the reulst of each loop to itself.
var totalAmount = orders.reduce(function(sumValue, ordersX){
    console.log("Hello!",sumValue,ordersX)       //ordersX is the entire amount: object.
    return sumValue+ordersX.amount;
}, 0) // 0 is the starting point for sumValue, sumValue will then add each new vaule in the loop





console.log(   totalAmount    );
console.log(       );
