// Your code here
// Russel. L helped styling
document.write("<span class='cell header'> &times; </span>");

let i = 0;
let row = 0;
let rowNum = 10;
let colNum = 10;

while (i <= colNum) {
	document.write('<span class="cell header">' + i + '</span>');
	i++;
}
document.write('<br>');
function generateTable(rowNum, colNum) {
	while (row <= rowNum) {
		console.log(rowNum);
		document.write(`<span class='cell header'> ${row} </span>`);
		let col = 0;
		while (col <= colNum) {
			document.write(`<span class='cell'> ${col * row} </span>`);
			col++;
		}
		document.write('<br>');
		row++;
	}
}
generateTable(rowNum, colNum);
