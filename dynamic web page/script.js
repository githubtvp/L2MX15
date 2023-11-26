const content = document.getElementById("content");
const animation = document.getElementById("animation");
const graphicsButton = document.querySelector("#graphicsButton");
const pTagButton = document.getElementById("pTagButton");
const attributesButton = document.getElementById("attributesButton");
const resetButton = document.getElementById("reset");
const last_one = document.getElementById("last_one");

        function clearEffects() {
            content.style.animation = "none";
            content.style.backgroundColor = "rgb(39, 39, 39)";
            content.style.color = "initial";
            content.style.fontFamily = "initial";
        }

        resetButton.addEventListener("click", () => {
            content.innerHTML = "";
            clearEffects();
            last_one.classList.remove("testing");
            last_one.innerHTML=' <div class="last_on"><footer  class="last_on" id="last_one">Done by :<br>Hemanth&nbsp;&nbsp;Varadharajaperumal &nbsp;&nbsp; Hari Kishore &nbsp;&nbsp;Mahalakshmi &nbsp;&nbsp; Merlin </footer></div> ';
        });

        animation.addEventListener("click", () => {
            clearEffects();
            content.innerHTML = "<div class='but-animation'><center ><h1 class='header-text'>Dynamic Web Page</h1><p class='header-para'>Web Technology Presentation</p></center></div>";
            content.style.backgroundColor = "white";
        });

        graphicsButton.addEventListener("click", () => {
            clearEffects();
            content.innerHTML = "<div class='graph-img'><img src='./background.jpg' alt='Web Design' width='100%'></div>";
        });

        pTagButton.addEventListener("click", () => {
            clearEffects();
            content.innerHTML = "<div class='ptag'><center><p>About<b><br> <br> <hr> <br>Creating a web page using dynamic HTML elements allows you to build web content that can change and adapt based on user interactions, input, or data.<br> Dynamic web pages are commonly created using a combination of HTML, CSS, and JavaScript.</b></p></center></div>";
            content.style.backgroundColor = "lightyellow";
        });

        attributesButton.addEventListener("click", () => {
            clearEffects(); 
            const userInput = prompt("Enter the text:");
            if (userInput) {
                const regex = new RegExp(userInput, 'ig'); // 'ig' flag for case-insensitive and global matching
                const contentText = content.innerHTML; 
                if (regex.test(contentText)) {
                    content.innerHTML = contentText.replace(regex, (match) => {
                        return `<span style="background-color:blue;">${match}</span>`;
                    });
                    content.style.color="lightgrey";
                    content.style.backgroundColor = "brown";
                } 
                else {
                    alert("User input does not match any content in the 'content' area.");
                }
            } 
            else {
                alert("No input provided");
            }
        });

        createTable = function () {
            clearEffects();
            content.style.backgroundColor = "white";
            let mRows = prompt("Enter number of rows (greater than 1) : ");    
            let nCols = prompt("Enter number of columns (greater than 1) : ");
            if (mRows > 1 && nCols >= 1) {
                content.innerHTML = "<table id='mytable' class='but-table'></table>"
                tbl = document.querySelector("#mytable")
                for (i = 0; i < mRows; i++) {
                    row = document.createElement("tr");
                    row.style.border = '4px solid red';
                    if (i === 0) {
                        cell = document.createElement("th");
                        cell.innerText = prompt("Enter table title : "); 
                        cell.style.width='250px';
                        cell.style.colspan = 8;
                        cell.style = 'text-align : center';   
                        cell.style.height = '35px';
                        cell.style="text-align: center";
                        row.appendChild(cell);
                    }
                    else {
                        for (j = 0; j < nCols; j++) {
                            cell = document.createElement("td")
                            let x = Math.random() * 100;   
                            x = Math.round(x);    
                            cell.innerText = x;
                            cell.style =  "text-align: center";
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

        footerButton.addEventListener("click", () => {
            clearEffects();
            last_one.classList.add("testing");
            last_one.innerHTML = " <h1> THANK YOU &#128591; </h1>"
        });

        changeheader=function(){
           clearEffects();
           let titleheader= document.getElementById("title_header");
           titleheader.style.color="orange";
           titleheader.style.fontFamily="Lucida Console", "Courier New";
           titleheader.style.fontSize="30px";
           titleheader.style.height="fit-content";
           titleheader.style.backgroundColor="lightblue";
        }
        
        function updateDateTime() {
            const dateTimeElement = document.getElementById("dateTime");
            const currentDate = new Date();
            const formattedDateTime = currentDate.toLocaleString('en-IN', {
                weekday: 'long',
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true
            });
            dateTimeElement.textContent = formattedDateTime;
        } 
        updateDateTime();
        setInterval(updateDateTime, 1000);
