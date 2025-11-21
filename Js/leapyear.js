//Find out if the input year is a leap year

function isLeapYear(year) {
    
  if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isLeapYear(2024));
console.log(isLeapYear(2022));
console.log(isLeapYear(2015));
console.log(isLeapYear(2019));
