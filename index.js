const prompt = require("prompt-sync")({ sigint: true });

var number='';
number= (prompt("Number : "));
i=0;
n=0;
dEven=false;
nCheck=0;

if(number.length==15){
    console.log("American Express");
}
else if(number.length==16){
    console.log("Master Card")
}
else if(number.length==13 || number.length==16){
    console.log("Visa")
}

for (i=number.length-1;i>=0;i--)
{
    var digit=number.charAt(i);
    n = parseInt(digit, 10);
    
    //console.log(nDigit);
    if (dEven) {
        if ((n *= 2) > 9) n -= 9;
    }

    nCheck += n;
    dEven = !dEven;
}
//console.log(nCheck);

if((nCheck % 10) == 0){
    console.log("Valid Number")
}
else{
    console.log("Invalid Number")
}

