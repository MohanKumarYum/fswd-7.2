var num1 = parseFloat(prompt("Input first number"));
var num2 = parseFloat(prompt("Input second number"));
var num3 = parseFloat(prompt("Input third number"));
var num4 = parseFloat(prompt("Input fourth number"));
var num5 = parseFloat(prompt("Input fifth number"));

if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
    var largestValueNum = num1;
}
if (num2 > num3 && num2 > num4 && num2 > num5 && num2 > num1) {
    var largestValueNum = num2;
}
if (num3 > num4 && num3 > num5 && num3 > num1 && num3 > num2) {
    var largestValueNum = num3;
}
if (num4 > num5 && num4 > num1 && num4 > num2 && num4 > num3) {
    var largestValueNum = num4;
}
if (num5 > num1 && num5 > num5 && num5 > num3 && num5 > num4) {
    var largestValueNum = num5;
}

console.log("Number 1: " + num1);
console.log("Number 2: " + num2);
console.log("Number 3: " + num3);
console.log("Number 4: " + num4);
console.log("Number 5: " + num5);

console.log("Highest value number is " + largestValueNum);