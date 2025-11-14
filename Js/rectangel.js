//js logic building
console.log("Hello world")

//area of rectangle

function area (l,b){
    //making is non negative
    if(l,b < 0) {
        throw new Error("length and breath can not be negative")
    }else{
         const areaofRectangle = l*b;
    console.log("Area of Reactangle is -" ,areaofRectangle)

    }
   }

area(4,4)
area(22,473)
area(13,-2) //throwing new error 