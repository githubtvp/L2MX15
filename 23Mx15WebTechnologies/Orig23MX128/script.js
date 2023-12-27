//const prompt = require('prompt-sync')();

const content = document.getElementById("content");
const headerButton = document.getElementById("headerButton");
const footerButton = document.getElementById("footerButton");
const graphicsButton = document.getElementById("graphicsButton");
const pTagButton = document.getElementById("pTagButton");
const attributesButton = document.getElementById("attributesButton");



function clearEffects() {
    content.style.animation = "none";
    content.style.backgroundColor = "initial";
    content.style.color = "initial";
    content.style.fontFamily = "initial";
}

headerButton.addEventListener("click", () => {
    clearEffects();
    content.innerHTML = "<h1>Dynamic Web Page</h1><p>Web Technology Presentation</p>";
    content.style.animation = "spin 4s";
});

graphicsButton.addEventListener("click", () => {
    clearEffects();
    content.innerHTML = "<img src='C:/Users/DELL/OneDrive/Desktop/Dynamic Web Page/dynamic web page/background.jpg' alt='Web Design'>";
});

pTagButton.addEventListener("click", () => {
    clearEffects();
    content.innerHTML = "<center><p>About<hr><b>Creating a web page using dynamic HTML elements allows you to build web content that can change and adapt based on user interactions, input, or data.<br> Dynamic web pages are commonly created using a combination of HTML, CSS, and JavaScript.</b></p></center>";
});

attributesButton.addEventListener("click", () => {
    clearEffects();
    content.style.backgroundColor = "lightgrey";
    content.style.color = "Brown";
    content.style.fontFamily = "Arial, sans-serif";
    content.style.padding = "10px";
});

footerButton.addEventListener("click", () => {
    clearEffects();
    content.innerHTML = "<footer>Thank you<br>Done by :<br>Hemanth<br>Varadharajaperumal<br>Hari Kishore<br>Mahalakshmi<br>Merlin</footer>";
    content.style.animation = "fadeIn 3s";
});

createTable = function () {    
    let mRows = prompt("Enter number of rows (greater than 1) : \t");    
    let nCols = prompt("Enter number of columns (greater than 1) : \t");
    if (mRows > 1 && nCols >= 1) {
        content.innerHTML = "<table id='mytable'></table>"
        tbl = document.querySelector("#mytable")
        for (i = 0; i < mRows; i++) {
            row = document.createElement("tr");
            row.style.border = '4px solid red';
            if (i === 0) {
                cell = document.createElement("th")
                cell.innerText = 'Table Title';
                //cell.style.width='220px';
                //  cell.style.colspan = 8;
                //    cell.style = 'text-align : center';   
                cell.style.height = '35px';
                // <th style="text-align: center">Table header...</th>
                row.appendChild(cell);
            }
            else {
                for (j = 0; j < nCols; j++) {
                    cell = document.createElement("td")
                    cell.innerText = 'Col : ' + (j + 1);
                    cell.style.width = '100px';
                    cell.style.height = '35px';
                    cell.style.backgroundColor = 'rgb(82, 196, 196)';
                    row.appendChild(cell);
                }
            }
            tbl.appendChild(row);
        }
        tbl.style.backgroundColor = "lightblue";
        tbl.style.border = '4px solid red';
    }
    else {
        alert('Please enter valid values for rows and columns');
    }
}