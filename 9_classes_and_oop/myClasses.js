// ES6

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("soham", "soham@gmail.com", "123")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());


// behind the scene

function Usertwo(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
}

Usertwo.prototype.encryptPassword = function(){
     return `${this.password}abc`
}
Usertwo.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new Usertwo("gaurav", "gaurav@gmail.com", "456")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());