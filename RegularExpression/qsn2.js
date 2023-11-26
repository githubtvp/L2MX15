const prompt = require('prompt-sync')({ sigint: true });
pr = function (arr) {
    process.stdout.write(arr);
}
prn = function () {
    console.log();
}

let rollNo = prompt("Enter the class roll number : ");
pr("\nYou entered : " + rollNo);
prn();
rollNo = rollNo.toUpperCase();
//let rollNo = '23MX201';
//const mExp = /(^23[M|m][X|x])/i;
//rollNo = '128';
//const mExp2 = /^(?:(?=[1][0-2][1-9])|[2](?:(?=[0-2][1-9]|[3][0])))/i;
const mExp3 = /(^23[M|m][X|x])(?:(?=[1][0-2][1-9])|[2](?:(?=[0-2][1-9]|[3][0])))/i;
prn();
if(mExp3.test(rollNo))
{
    pr("Valid class roll number");
}
else{
    pr("In Valid class roll number");
};