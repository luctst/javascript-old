// Variables
var names = ['lucas','marie','philippe'];
var john = ['john','smith',1990,'designer',false];
let tab = new Array(1,2,'bonjour');
console.log(tab);


// Functions
tab.push('blue');
john.unshift('Mr.');
tab.pop();
tab.shift();


// Déclarations
if (john.indexOf('yellow') === -1 ) {// IndexOf permet de vérifier si l'élement en paramétre est présent dans le tableau
  console.log('La couleur préferé de John n\'est pas jaune');
}
