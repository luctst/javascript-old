// Variables
var names = [1,2,3,4,5];


// Functions
// Déclarations
for (var i = 0; i < names.length; i++) {
  console.log(names[i]);// Normal loop
}

for (var i = names.length; i >=0; i--) {
  console.log(names[i]);// Loop reverse, i = Length of the array(5) ; as long i >= 0 ; decrease i by one
}

for (var i = 0; i < names.length; i++) {
  console.log(names[i]);
  if (names[i] === 3) {
    break; // Stop the loop when i === 3
  }
}
for (var i = 0; i < names.length; i++) {
  if (names[i] === 3) {
    continue; // Skip when i == 3 = don't print the value, skipt it and continue
  }
  console.log(names[i]);
}
