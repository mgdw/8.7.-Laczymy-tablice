var womenNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var menNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var allNames = womensNames.concat(mensNames);
var newName ='Marian';

if (allNames.indexOf(newName) === -1) {
	allNames.push(newName);
} else {
	console.log('Imię już istnieje');
}	