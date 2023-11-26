const content = document.getElementById("content");

function clearEffects() {
    content.style.animation = "none";
    content.style.backgroundColor = "rgb(39, 39, 39)";
    content.style.color = "initial";
    content.style.fontFamily = "initial";
}

//const subjects = ["  ", "MFC", "WT", "SPC", "DS", "DBMS", "Elective 1"];
const subjTotal = [{ subName : " ", subTot : 0 }, 
{ subName : "MFC", subTot : 0 },  
{ subName : "WT ", subTot : 0 }, 
{ subName : "SPC", subTot : 0 }, 
{ subName : "DS", subTot : 0 }, 
{ subName : "DBMS", subTot : 0 }, 
{ subName : "Elective 1", subTot : 0}];

const examType = ["Tutorial 1", "Tutorial 2", "Assignments", "Presentations", "Attendance", "Total"];
const nCols = subjTotal.length;
//alert(nCols2);
const mRows = examType.length;
createTable = function () {
    clearEffects();
    content.style.backgroundColor = "grey";
    content.innerHTML = "<table id='mytable' class='but-table'></table>"
    tbl = document.querySelector("#mytable")
    for (i = 0; i < mRows + 2; i++) {
        row = document.createElement("tr");
        row.style.border = '4px solid red';       
        if (i === 0) {
            cell = document.createElement("th");
            cell.innerText = "Semester I";  
            cell.style.width = '250px';
           // cell.style.colspan = nCols + 1; 
            cell.style = 'text-align : center';         
            cell.style.height = '35px';
            cell.style.backgroundColor = "lightblue";
            row.appendChild(cell);
        }
        else {
            if (i === 1) { //alert("I value :"+ i);
                for (j = 0; j < nCols; j++) {
                    cell = document.createElement("td");
                    cell.innerText = subjTotal[j].subName;
                    cell.style = "text-align: center";
                    cell.style.width = '100px';
                    cell.style.height = '35px';
                    cell.style.backgroundColor = 'rgb(82, 196, 196)';
                    row.appendChild(cell);
                }
            }
            else if ( 2 <= i &&  (i < mRows + 1) ){
               // alert("I value :"+ i);
                for (j = 0; j < nCols; j++) {
                    cell = document.createElement("td");
                    let txt;
                    if (j == 0) {
                        txt = examType[i - 2];
                        cell.innerText = txt;
                    }
                    else {
                        let x = Math.random() * 100;
                        x = Math.round(x);
                        subjTotal[j].subTot+=x;
                        cell.innerText = x;                         
                    }
                    cell.style = "text-align: center";
                    cell.style.width = '100px';
                    cell.style.height = '35px';
                    //cell.style.backgroundColor = 'rgb(82, 196, 196)';
                    row.appendChild(cell);                 
                }
            }
            else {
               // alert("Subject Total :" + subjTotal[1].subTot);
                for (j = 0; j < nCols; j++) {
                    cell = document.createElement("td");
                    let txt;
                    if (j == 0) {
                        txt = examType[i - 2];
                        cell.innerText = txt;
                    }
                    else {                       
                        cell.innerText = subjTotal[j].subTot;
                    }
                    cell.style = "text-align: center";
                    cell.style.width = '100px';
                    cell.style.height = '35px';
                  //  cell.style.backgroundColor = 'rgb(82, 196, 196)';
                    row.appendChild(cell);
                }
            }
          
        }
        tbl.appendChild(row);
    }
    tbl.style.backgroundColor = "lightblue";
    tbl.style.border = '4px solid red';
}

