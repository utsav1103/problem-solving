// claculating the factorial

function factorial(Num) {

  if (typeof Num !== 'number' || Number.isNaN(Num)){
    throw new Error("Num must be a valid number")
  }
  if(!Number.isInteger(Num)){
    throw new Error("Num is not an integer")
  }

  if(Num < 0){
    throw new Error ("Num is not a psoitive integer")
  }
  let result = 1;
  for (let i = 1; i <= Num; i++) {
    result = result * i;
  }
  return result;
}

//console.log(factorial(13));
console.log(factorial('qweq'));
//console.log(factorial(-13));
