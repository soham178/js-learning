function sayMyName(){
    console.log("S");
    console.log("O");
    console.log("H");
    console.log("A");
    console.log("M");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
    
// }


function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}


const result = addTwoNumbers(3, 4)

// console.log("Result: ", result);




function loginUserMessage(username = "gaurav"){
    // if(username === undefined){
    //     console.log("Please enter a username");
    //     return
    // }
    return `${username} just logged in`
}

// console.log(loginUserMessage("soham"))
// console.log(loginUserMessage())

function calculateCartPrice(va1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "soham",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username: "gaurav",
    price: 599
})


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([500, 800, 100, 700]));