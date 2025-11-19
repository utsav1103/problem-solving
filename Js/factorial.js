// claculating the factorial

function factorial(Num) {
  let result = 1;
  for (let i = 1; i <= Num; i++) {
    result = result * i;
  }
  return result;
}

console.log(factorial(3));
