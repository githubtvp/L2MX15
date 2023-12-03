const prompt = require('prompt-sync')();

function displayMenu() {
    console.log("a. Enter 'a' - Demonstarte str.length");
    console.log("b. Enter 'b' - Demonstrate str.slice(st, end) str.slice(st, length)");
    console.log("c. Enter 'c' - Demonstrate str.substring()");
    console.log("d. Enter 'd' - Demonstrate str.replace()");
    console.log("e. Enter 'e' - Demonstrate str.replaceAll()");
    console.log("f. Enter 'f' - Demonstrate str.toUpperCase()");
    console.log("g. Enter 'g' - Demonstrate str.toLowerCase()");
    console.log("h. Enter 'h' - Demonstrate str.concat()");
    console.log("j. Enter 'j' - Demonstrate str.trim()");
    console.log("k. Enter 'k' - Demonstrate str.trimStart()");
    console.log("l. Enter 'l' - Demonstrate str.trimEnd()");
    console.log("m. Enter 'm' - Demonstrate str.padStart() ");
    console.log("n. Enter 'n' - Demonstrate str.padEnd() ");
    console.log("o. Enter 'o' - Demonstrate str.charAt() ");
    console.log("p. Enter 'p' - Demonstrate str.charCodeAt() ");
    console.log("r. Enter 'r' - Demonstrate str.split() ");

    console.log("q. Enter 'q' to exit program");
}

function getLength() {
    let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let len = text.length;
    console.log("Text string : " + text);
    console.log("Length of string = " + len);
}

function demoStringSlice() {
    let text = "Apple, Banana, Kiwi";
    let part = text.slice(7, 13);
    console.log(`text.slice(7, 13): String slice starting from 7 and ending at 12 :\n ${part} `);
    text = "Apple, Banana, Kiwi";
    part = text.slice(7);
    console.log(`text.slice(7) : String slice starting from 7 :\n ${part} `);
    text = "Apple, Banana, Kiwi";
    part = text.slice(-12);
    console.log(`text.slice(-12) : If a parameter is negative, the position is counted from the end of the string: :\n ${part} `);
    text = "Apple, Banana, Kiwi";
    part = text.slice(-12, -6);
    console.log(`text.slice(-12, -6) : Slices out a portion of a string from position -12 to position -6: :\n ${part} `);
}

function demoSubString() {
    let str = "Apple, Banana, Kiwi";
    let part = str.substring(7, 13);
    /*substring() is similar to slice().The difference is that start and end values less than 0 are 
treated as 0 in substring(). */
    console.log(`str.substring(7, 13) : Subtsring starting from 7 upto 13(not included) : \n ${part} `);
    str = "Apple, Banana, Kiwi";
    part = str.substr(7, 6);
    /*If you omit the second parameter, substring() will slice out the rest of the string. */
    console.log(`str.substr(7, 6) : Subtsring starting from 7 and the length of substring 6 : \n ${part} `);
    /*If you omit the second parameter, substr() will slice out the rest of the string.*/
    str = "Apple, Banana, Kiwi";
    part = str.substr(7);
    console.log(`str.substr(7) : Subtsring starting from 7 and remaining all : \n ${part} `);
    /*If the first parameter is negative, the position counts from the end of the string.*/
    str = "Apple, Banana, Kiwi";
    part = str.substr(-4);
    console.log(`str.substr(-4) : Subtsring starting count from end of string get 4 char : \n ${part} `);

}

function demoStrReplace() {
    /*The replace() method replaces a specified value with another value in a string
    The replace() method does not change the string it is called on.
    The replace() method returns a new string.
    The replace() method replaces only the first match(default)
    By default, the replace() method is case sensitive. */
    let text = "Please visit Microsoft!";
    let newText = text.replace("Microsoft", "W3Schools");
    console.log(`text.replace("Microsoft", "W3Schools") : 1st arg replaced by 2nd : \n ${newText} `);

    /*To replace case insensitive, use a regular expression with an /i flag (insensitive):*/
    text = "Please visit Microsoft!";
    newText = text.replace(/MICROSOFT/i, "W3Schools");
    console.log(`text.replace(/MICROSOFT/i, "W3Schools") : 1st arg replaced by 2nd without regard to case : \n ${newText} `);
    /*To replace all matches, use a regular expression with a /g flag (global match): */
    text = "Please visit Microsoft and Microsoft!";
    newText = text.replace(/Microsoft/g, "W3Schools");
    console.log(`text.replace(/MICROSOFT/g, "W3Schools") : All occurances of 1st arg replaced by 2nd arg : \n ${newText} `);


}

function demoReplaceAll() {
    /*The replaceAll() method allows you to specify a regular expression instead of a string to be replaced.
If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown. */
    let text = "I love cats. Cats are very easy to love. Cats are very popular."
    text = text.replaceAll("Cats", "Dogs");
    text = text.replaceAll("cats", "dogs");
    console.log(`text.replaceAll("cats","dogs")") : All occurances of 1st arg replaced by 2nd arg : \n ${text} `);
}

function demoToUpperCase() {
    let text1 = "Hello World!";
    let text2 = text1.toUpperCase();
    console.log(`text1.toUpperCase() : \n ${text2} `);
}

function demoToLowerCase() {
    let text1 = "Hello World!";
    let text2 = text1.toLowerCase();
    console.log(`text1.toLowerCase() : \n ${text2} `);
}

function demoStrConcat() {
    /*All string methods return a new string. They don't modify the original string.
    Formally said: Strings are immutable: Strings cannot be changed, only replaced. */
    /*concat() joins two or more strings:*/
    let text1 = "Hello";
    let text2 = "World";
    let text3 = text1.concat(" ", text2);
    console.log("text1.concat(' ', text2): ", text3);
    /*The concat() method can be used instead of the plus operator. These two lines do the same: */
    text = "Hello" + " " + "World!";
    text = "Hello".concat(" ", "World!");
    console.log("Hello.concat(' ', 'World!'): ", text);
}

function demoStrTrim() {
    /*The trim() method removes whitespace from both sides of a string: */
    let text1 = "      Hello World!      ";
    let text2 = text1.trim();
    console.log("String original : ", text1);
    console.log("text1.trim() : ", text2);
}

function demoStrTrimStart() {
    /*The trimStart() method works like trim(), but removes whitespace only from the start of a string. */
    let text1 = "      Hello World!      ";
    let text2 = text1.trimStart();
    console.log("String original : ", text1);
    console.log("text1.trimStart() : ", text2);
}

function demoStrTrimEnd() {
    /*The trimEnd() method works like trim(), but removes whitespace only from the end of a string.*/
    let text1 = "      Hello World!      ";
    let text2 = text1.trimEnd();
    console.log("String original : ", text1);
    console.log("text1.trimEnd() : ", text2);
}

function demoStrPadStart() {
    /*The padStart() method pads a string from the start.    
    It pads a string with another string (multiple times) until it reaches a given length. */

    /*Pad at start a string with "0" until it reaches the length 4: */
    let text = "5";
    let padded = text.padStart(4, "0");
    console.log("text.padStart(4, '0') : ", padded);
    /*Pad at start a string with "x" until it reaches the length 4:*/
    text = "5";
    padded = text.padStart(4, "x");
    console.log("text.padStart(4, 'x') : ", padded);
    /*Note : The padStart() method is a string method.
    To pad a Number, convert the number to a string first. */
    let numb = 5;
    text = numb.toString();
    padded = text.padStart(4, "0");
    console.log("text.padStart(4, '0') : ", padded);
}


function demoStrPadEnd() {
    /*The padEnd() method pads a string from the end.
    It pads a string with another string (multiple times) until it reaches a given length. */

    /*Pad at end a string with "0" until it reaches the length 4: */
    let text = "5";
    let padded = text.padEnd(4, "0");
    console.log("text.padEnd(4, '0') : ", padded);
    /*Pad at end a string with "x" until it reaches the length 4:*/
    text = "5";
    padded = text.padEnd(4, "x");
    console.log("text.padEnd(4, 'x') : ", padded);
    /*Note : The padEnd() method is a string method.
    To pad a Number, convert the number to a string first. */
    let numb = 5;
    text = numb.toString();
    padded = text.padEnd(4, "0");
    console.log("text.padEnd(4, '0') : ", padded);
}


function demoCharAt() {
    /*The charAt() method returns the character at a specified index (position) in a string: */
    let text = "HELLO WORLD";
    let char = text.charAt(0);
    console.log("Text : ", text);
    console.log("text.charAt(0) : ", char);
}
function demoCharCodeAt() {
    /*The charAt() method returns the character at a specified index (position) in a string: */
    /*The charCodeAt() method returns the unicode of the character at a specified index in a string:
 The method returns a UTF-16 code (an integer between 0 and 65535). */

    let text = "HELLO WORLD";
    let char = text.charCodeAt(0);
    console.log("Text : ", text);
    console.log("text.charCodeAt(0) : ", char);
}

function demoStrSplit() {
    /*If you want to work with a string as an array, you can convert it to an array. */
    /*A string can be converted to an array with the split() method: */
    /*If the separator is omitted, the returned array will contain the whole string in index [0].*/

    let text = "a,b,c,d,e,f";
    console.log("Text : ", text);
    let myTxt = text.split(",")    // Split on commas
    console.log("text.split(','), Split on commas: ", myTxt);
    /*If the separator is omitted, the returned array will contain the whole string in index [0].*/
    myTxt = text.split(" ")    // Split on spaces
    console.log("text.split(' '), Split on spaces: array will contain the whole string in index [0] :", myTxt);
    myTxt = text.split("|")    // Split on pipe
    /*If the separator is "", the returned array will be an array of single characters: */
    myTxt = text.split("");
    console.log("text.split(''), Split on '' : array will be an array of single characters : ", myTxt);
}

while (true) {
    displayMenu();
    let choice = prompt("Enter your choice: ");

    switch (choice) {
        case "a":
            getLength();
            choice = 'q';
            break;
        case "b":
            demoStringSlice();
            choice = 'q';
            break;
        case "c":
            demoSubString();
            choice = 'q';
            break;
        case "d":
            demoStrReplace();
            choice = 'q';
            break;
        case "e":
            demoReplaceAll();
            choice = 'q';
            break;
        case "f":
            demoToUpperCase();
            choice = 'q';
            break;
        case "g":
            demoToLowerCase();
            choice = 'q';
            break;
        case "h":
            demoStrConcat();
            choice = 'q';
            break;
        case "j":
            demoStrTrim();
            choice = 'q';
            break;
        case "k":
            demoStrTrimStart();
            choice = 'q';
            break;
        case "l":
            demoStrTrimEnd();
            choice = 'q';
            break;
        case "m":
            demoStrPadStart();
            choice = 'q';
            break;
        case "n":
            demoStrPadEnd();
            choice = 'q';
            break;
        case "o":
            demoCharAt();
            choice = 'q';
            break;
        case "p":
            demoCharCodeAt();
            choice = 'q';
            break;
        case "r":
            demoStrSplit();
            choice = 'q';
            break;
        case "q":
            console.log("Exiting program.");
            break;
        default:
            console.log("Invalid choice. Please try again.");
            break;
    }
    if (choice === 'q') {
        break;
    }
}
