//solving the sum of digits

//if num is 234 then sum is 2+3+4

function sumOfAll(num){
    let str = num.toString();
    let sum = 0;
    for(let i=0; i< str.length;i++){
        sum += Number(str[i]);
    }
    return sum
    
}
console.log(sumOfAll(123))

//another method

function addAllNum(num1){
    let Sum = 0;
    while (num1 > 0){
        Sum += num1 % 10;
        num1 = Math.floor(num1/10);
    }
    return Sum;


}console.log(addAllNum(1234));