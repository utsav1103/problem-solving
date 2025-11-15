//if a number is even or odd

function num(number){
    return number % 2 === 0 ? "even" : "odd"
    // if(number%2==0){
    //     console.log(number,"is Even Number")
    // }else{
    //     console.log(number,"is Odd Number")
    // }
}

// num(4)
// num(-4)
// num(0)
// num(-13)


console.log(num(79)) ;
console.log(num(-13)) ;
console.log(num(10)) ;
console.log(num(4)) ;