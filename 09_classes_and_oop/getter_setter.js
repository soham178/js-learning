class User {
    constructor(email, password){
        this.email = email,
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}soham`
    }
    set password(value){
        this._password = value
    }
}

const soham = new User("s@soham.ai", "abc")
console.log(soham.email);