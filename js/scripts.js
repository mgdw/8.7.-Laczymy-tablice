/*Zadeklaruj dwie tablice:*/
var womensNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var mensNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

/*Użyj funkcji concat(), aby połączyć ze sobą dwie tablice i przypisz je do zmiennej allNames.*/
var allNames = womensNames.concat(mensNames);
var newName ='Marian';

if (allNames.indexOf(newName) == -1) {
	allNames.push(newName);
} else {
	console.log('Imię już istnieje');
}	