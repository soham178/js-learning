// singleton
// Object.create

// objects literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Soham",
    "full name": "Soham Sarkar",
    [mySym] : "mykey1",
    age: 19,
    location: "kolkata",
    email: "sohamsarkar@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);

// console.log(JsUser.full name) => you can't use this
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "soham@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "soham@microsoft.com"
console.log(JsUser.email);

JsUser.greeting = function() {
    console.log("Hello Js User");
}

JsUser.greetingTwo = function() {
    console.log(`Hello Js User, ${this.name}`);
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());