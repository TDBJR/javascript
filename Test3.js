
//result = String.fromCharCode(65); // gets the Letter for this number = A

//result = "ba".charAt(1); // gives the character at the index given = a

//result = "ABC".charCodeAt(1);// gives the ASCII code value for the character at the given index = 66

function decoder(string){
    var result = ""; 
    result+= string.split("").map(getValue).join("");	
     // Map sends in each of it's variables values to getValue one at a time.
    return result;
}
function getValue(stringX){    
    x=stringX.charCodeAt(0);  // 0 is the index position, since there is only one value being passed in at a time we need index 0
   if (x>64 && x<78){
       result = String.fromCharCode(x+13);
   }else if (x>77 && x<=90){
       result = String.fromCharCode(x-13);       
   }else{
       result = String.fromCharCode(x);   
  }
  return result;
}
//console.log(   decoder("A-B-C-D-E-F-G-H-I-J-K-L-M-N-O-P-Q-R-S-T-U-V-W-X-Y-Z")  );
console.log(   decoder('GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.!!!')     );



