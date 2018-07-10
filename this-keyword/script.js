var keyword = this;
return keyword; // window object display

function calculateAge(yearofBirth) {
  return 2018 - yearofBirth;
  return this;
}
calculateAge(1995); // 22 and window object

var lucas = {
  name: 'Lucas',
  surname: 'Tostée',
  age: 22,
  calculateYear: function() {
    return this;
    return 2018 - this.age;

    function innerFunction() {
      return this;
    }
  }
}
lucas.calculateYear(); // lucas Object and 22
lucas.calculateYear(); // lucas object and 22 and window object
