//find the smallest number from the given

// function findSmallest(a,b,c){
//     if(a<b && a<c){
//         console.log("Smallest number is",a)
//     }else if(b<a && b<c){
//         console.log("Smallest number is",b)
//     }else{
//         console.log("Smallest number is",c)
//     }
// }

//-====
//another method
function findSmallest(a, b, c) {
  let smallestN = a;
  if (b < smallestN) {
    smallestN = b;
  }
  if (c < smallestN) {
    smallestN = c;
  }
  return smallestN;
}

console.log(findSmallest(32, 14, 51));

console.log(findSmallest(-43, 1, 21));

console.log(findSmallest(2, 14, 51));
// findSmallest(32,14,11)
// findSmallest(2,-14,71)
// findSmallest(2,2,2)
// findSmallest(3,2,2)
// findSmallest(1,2,2)
