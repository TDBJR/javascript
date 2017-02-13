
function regExSearch(string,search){
    
    // match is a Regex function
    if (string.match(search)) { 
	result = "String Matches!";
    }else{
	result = "No Match!";
    }return result;
};// string to find /t/ will search for any t. /^t$/ will search for an EXACT match if if the string is shorter or longer then t then no match. 
// in this case to use ^$ you would have to use /This is a test string$/ to get a match. You can also just enter a string for a match.
console.log(regExSearch("This is a test string", 'is'));
console.log(regExSearch("Hello World!", /[a-zA-z]/))
console.log(regExSearch("Hello World!", /H/))
console.log(regExSearch("Hello World!", /HW/)) // although HW are in the string they are not in this order so no match.
/*
 * .	any character except newline
\w \d \s	word, digit, whitespace
\W \D \S	not word, digit, whitespace
[abc]	any of a, b, or c
[^abc]	not a, b, or c
[a-g]	character between a & g
^abc$	start / end of the string
\b \B	word, not-word boundary
\. \* \\	escaped special characters
\t \n \r	tab, linefeed, carriage return
\u00A9	unicode escaped ©
(abc)	capture group
\1	backreference to group #1
(?:abc)	non-capturing group
(?=abc)	positive lookahead
(?!abc)	negative lookahead
a* a+ a?	0 or more, 1 or more, 0 or 1
a{5} a{2,}	exactly five, two or more
a{1,3}	between one & three
a+? a{2,}?	match as few as possible
ab|cd	match ab or cd
*/
















