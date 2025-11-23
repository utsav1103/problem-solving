//generate the multiplication table

function table(num){
    for(let i = 1;i<=10;i++){
        const result = num * i;
        console.log(`${result}`)
    }
     
}
console.log(table(5))