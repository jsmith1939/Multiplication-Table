// Your code here
// Russel. L helped styling
document.write("<span class='cell header'> &times; </span>");

let i = 0;

while (i <= 10) {
	document.write('<span class="cell header">' + i + '</span>');
	i++;
}

document.write('<br>');

let row = 0;

while (row <= 10) {
	document.write(`<span class='cell header'> ${row} </span>`);
	let col = 0;
	while (col <= 10) {
		document.write(`<span class='cell'> ${col * row} </span>`);
		col++;
	}
	document.write('<br>');
	row++;
}
