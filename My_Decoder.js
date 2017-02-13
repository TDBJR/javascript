var a= ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        

    function decoder(string){
        var result = ""
        for (x=0; x<string.length; x++){
    		result += getValue(string[x]);
       }
        return result;
}
    function getValue(stringX){
        if (a.indexOf(stringX)> 12 ){
            result =  a[a.indexOf(stringX) - 13];
       }else if(a.indexOf(stringX)< 13 && a.indexOf(stringX) >=0 ){
        	result = a[a.indexOf(stringX)+13];
       }else{
            result = stringX;
       }
        return result;
}


console.log(   decoder("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK!.")   );
