/**Function that receives two parameters: Rows and columns. The values
have to be numbers under 10. (String-numbers are not valid). It will
generate a string of an HTML table with the rows and the columns
specified. If the requirements are not met, it will return: "Try again". If
they are met, it will return the table (without spaces). Examples: 

Table 1x1:
<table><tr><td></td></tr></table>
Table 2x3:
<table><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td>
</tr></table>*/

function action (){
    document.getElementById('createTableButton').addEventListener('click', () => {
        let rows = document.getElementById('createTableStuff').value
        let columns = document.getElementById('createTableStuff2').value
        createTable(parseInt(rows), parseInt(columns))
    })
}


function createTable(rows, columns) {
    let tBody = document.getElementById("tableBody")
    if (isNaN(rows) || isNaN(columns) || rows > 10 || columns > 10 || rows < 1 || columns < 1) {
        return "Try again";
    } else {
        let table = "<table style='width: 100%'>";
        for (let i = 0; i < rows; i++) {
            table += "<tr>";
            for (let j = 0; j < columns; j++) {
                table += "<td style='width: 50px; height: 50px'></td>";
            }
            table += "</tr>";
        }
        table += "</table>";
        tBody.innerHTML = table;
    }
    return tBody;
}


action()