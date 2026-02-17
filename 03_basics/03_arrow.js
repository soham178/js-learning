const user = {
    username: "soham",
    price: 599,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }

}

// user.welcomeMessage()
// user.username = "gaurav"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "soham"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "soham"
//     console.log(this.username);
// }

// const chai =  () => {
//     let username = "soham"
//     console.log(this.username);
// }

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "soham)"})


console.log(addTwo(3,4))
