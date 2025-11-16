//reverse the string

function reverseString(str){
 
    let reversed = '';
    for(let i = str.length - 1; i>=0; i--){
        reversed += str[i]
    }
    return reversed;

}
 const originalStr = "Mikasa";
 const reversedStr = reverseString(originalStr);
 console.log(reversedStr);