// Your code here
// Russel. L helped styling

let rowNum = 11;
let colNum = 11;

console.log(rowNum, colNum);

let button = document.getElementById('submit');
button.addEventListener('click', newTable);

function newTable() {
	let row = document.getElementById('row').value;
	let col = document.getElementById('column').value;
	if (row === '' || col === '') {
		return;
	}
	row = parseInt(row);
	col = parseInt(col);
	console.log(row, col);
	generateTable(row, col);
}

function generateTable(rowNum, colNum) {
	let i = 0;
	let row = 0;
	let table = document.getElementById('multiplication-table');
	table.innerHTML = "<span class='cell header'> &times; </span>";

	while (i <= colNum) {
		table.innerHTML += '<span class="cell header">' + i + '</span>';
		i++;
	}
	table.innerHTML += '<br>';
	while (row <= rowNum) {
		console.log(rowNum);
		table.innerHTML += `<span class='cell header'> ${row} </span>`;
		let col = 0;
		while (col <= colNum) {
			table.innerHTML += `<span class='cell'> ${col * row} </span>`;
			col++;
		}
		table.innerHTML += '<br>';
		row++;
	}
}
generateTable(rowNum, colNum);
