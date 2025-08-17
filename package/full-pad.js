function fullPad(str,chr,nochar){

  if(nochar<1 || str.length==0 || chr.length==0) return str;
  
  temp = ""; //temp string
  chrs = ""; //padding string
  chr = chr.toString(); //padding character(if number it will be converted to string)
  str = str.toString().trim(); //original string

  //generating padding string
  for(let i=0; i<nochar; i++){
    chrs += chr;
  }

  //Adding padding string in place of " " in original string
  for(let i=0; i<str.length; i++){
      if(str[i]==" " && temp[temp.length-1]!=chr){
        temp += chrs;
        continue;
      }
      else if(str[i]==" "){
        continue;
      }
      temp += str[i];
  }

  //Returning final padded string by adding padding string at both ends
  return (chrs+temp+chrs);
}

module.exports = fullPad;