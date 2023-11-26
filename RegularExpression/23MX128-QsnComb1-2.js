const prompt = require('prompt-sync')({ sigint: true });
pr = function (msg) {
    process.stdout.write(msg);
}
prn = function () {
    console.log();
}

pr("\nQsn 1 : \n");
let panNo = prompt("Enter the PAN card number : ");
pr("\nYou entered : " + panNo);
prn();
panNo = panNo.toUpperCase();
//let panNo = 'ADNPP1856B';
const mExp = /(^[A-Za-z]{5})(\d{3}[1-9])([A-Za-z])$/i;
//console.log(mExp.test(panNo))
if (mExp.test(panNo)) {
    pr('Valid PAN card number ');
    const res = mExp.exec(panNo);
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
    let strName = 'The first letter of the PAN card holder\'s name is : ' + name;
    prn();
    pr(strPan);
    prn();
    pr(strType);
    prn();
    pr(strName);

}
else {
    pr('InValid PAN card number!- Exiting');
};

prn();
pr("\nQsn 2 : \n");
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