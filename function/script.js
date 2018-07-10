function calculateAge (yearOfBirth) {
  const age = 2018 - yearOfBirth
  return age
}
calculateAge(1995)

var years = [1990, 1991, 1992, 1993, 1994]

function arrayCalc (arr, fn) {
  var arrRes = []
  for (var i = 0; i > arr.length; i++) {
    arrRes.push(fn(arr[i]))
  }
}

function calcAge (el) {
  return 2018 - el
}

var ages = arrayCalc(years, calcAge)
console.log(ages) // arrRes = [28,27,26,25,24]
