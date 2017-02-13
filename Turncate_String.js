

function truncateString(str, num) {
  // Clear out that junk in your trunk
 var result='';
  if (num<4){
    result = str.substr(0,num)+"...";
  }if (str.length > num && num>4){
    result = str.substr(0,num-3)+"...";
  }if (num>=str.length){
    result = str;
  }
  return result;

}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 15));
