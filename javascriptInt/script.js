console.log("javascript init")

let numOne=prompt("13")
let numTwo=prompt("20")
function addNumbers(){
    console.log(parseInt(numOne)+parseInt(numTwo))
}

//
//anonymous functions
const subtraction = function (){
    console.log(numOne-numTwo)
}
//flatarrow function
const multiply=()=>console.log(numOne*numTwo)
multiply()