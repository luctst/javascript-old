// Variables
const a = 'hello'; // We create a variable in the global scope.
first();
// Functions
function first() {// We create a different scope
  const b = 'hi';// We can access this variable only on the function scope.
  second();

  function second() {// We can create many scopes, here we create an other scope inside our functions.
    const c = 'hey';
    third();
  }
}
function third() {// An other scope so here we can only access in our third scope and global scope.
  const d = 'john';
  console.log(a);
}
