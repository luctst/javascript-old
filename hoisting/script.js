calculateAge(22); // 1996

calculateAge(year) { // function
  console.log(2018 - year);
};

calculateAge(22); // 1996

retirement(22); // Error

var retirement = function(age) { // anonymous function
  console.log(65 - (2018 - age));
};

retirement(1995); // 42

console.log(tab[0]); // error

let tab = ['lucas','tostée'];

console.log(tab[0]);
