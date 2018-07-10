let a = "lucas";

function first() {
  let b = "hello";
  second();
  let c = b + a;
}

function second() {
  let d = "Hi !";
  third();
  let e = d + a;
}

function third() {
  let f = "Hey !";
  let g = f + a;
}

first();
