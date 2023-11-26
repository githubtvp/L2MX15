const prompt = require('prompt-sync')({ sigint: true });
const text = 'the phone number is +49 30 1234567.';
const regExp = /\+?\d{2}\s\d{2}\s\d{5,7}/;
const result = regExp.exec(text);
//console.log('Number : ' + result[0] + ' found at index : ' + result.index + '.');

const text2 = 'the phone number is +49 30 1234567' +
    'the business phone number is +49 30 1234568.';

let result2;
const regExp2 = /\+?\d{2}\s\d{2}\s\d{5,7}/g;
while ((result2 = regExp2.exec(text2)) != null) {
    // console.log('Number : ' + result2[0] + ' found at index : ' + result2.index + '.');
}

pr = function (arr) {
    process.stdout.write(arr);
}
prn = function () {
    console.log();
}

//let panNo = prompt("Enter the PAN card number : ");
//console.log("\nYou entered : " + panNo);
let panNo = 'ADNPP1856B';
//const mExp = /^[A-Za-z]{5}\d{4}[A-Za-z]$/;
//const mExpObj = new RegExp('(^[A-Za-z]{5})\d{4}[A-Za-z]$');
//console.log(mExpObj.test(panNo));

const mExp = /(^[A-Za-z]{5})(\d{3}[1-9])([A-Za-z])$/;
//console.log(mExp.test(panNo));
const res = mExp.exec(panNo);
//console.log(res[0]);
//console.log(res[1]);
//console.log(res[2]);
//console.log(res[3]);
const first = res[1];
const status = first[3];
const name = first[4];
let theStatus;
switch (status) {
    case "T":
        theStatus = 'Trust';
        break;
    case "F":
        theStatus = 'Firm'
        break;
    case "H":
        theStatus = 'HUF';
        break;
    case "P":
        theStatus = 'Individual'
        break;
    case "C":
        theStatus = 'Company';
        break;
    default:
        break;
}

let strPan = 'The PAN card number is : ' + res[0];
let strType = 'The PAN card type represents : ' + theStatus;
let strName = 'The first letter of the PAN card holders name is : ' + name;
prn();
pr(strPan);
prn();
pr(strType);
prn();
pr(strName);

