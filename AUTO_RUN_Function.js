(function() {
    var string = "Hello World"; // string to be tested

    if (string.match(/^Hello World$/)) { // string to find
        result = "String Matches!";
    } else {
        result = "No Match!";
    }
    console.log(result);
})();
