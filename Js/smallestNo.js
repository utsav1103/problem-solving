//find the smallest number from the given

function findSmallest(a,b,c){
    if(a<b && a<c){
        console.log("Smallest number is",a)
    }else if(b<a && b<c){
        console.log("Smallest number is",b)
    }else{
        console.log("Smallest number is",c)
    }
}
findSmallest(32,14,51)
findSmallest(2,43,1)
findSmallest(32,14,11)