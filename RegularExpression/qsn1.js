const prompt = require('prompt-sync')({ sigint: true });
pr = function (arr) {
    process.stdout.write(arr);
}
prn = function () {
    console.log();
}

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


