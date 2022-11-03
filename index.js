const prompt = require("prompt-sync")({ sigint: true });

var number='';
number= (prompt("Number : "));
i=0;
numberOdd='';
numberEven='';
odds=0;
evens=0;
sumOdd=0;
sumEven=0;
TotalSum=0;

if(number.length==15){
    console.log("American Express");
}
else if(number.length==16){
    console.log("Master Card")
}
else if(number.length==13 || number.length==16){
    console.log("Visa")
}

for(i=0;i<number.length;i += 2){
    odds = number[i] * 2;
    if(odds>9){
        odds -= 9;
    }
    numberOdd += odds;
    sumOdd += odds;
}
//console.log(numberOdd);
//console.log(sumOdd);

for(i=1;i<number.length;i+= 2){
    evens = parseInt(number[i]);
    numberEven += evens;
    sumEven += evens;
}
//console.log(numberEven);
//console.log(sumEven);
TotalSum = sumOdd + sumEven;
console.log(TotalSum);
if((TotalSum % 10) == 0){
        console.log("Valid Number")
    }
    else{
        console.log("Invalid Number")
    }








