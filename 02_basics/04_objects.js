//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.loggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "soham@goofle.com",
    fullname: {
        userfullname: {
            firstname: "soham",
            lastname: "sarkar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

// const obj3 = { onj1, onj2}
//const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
console.log(obj3);



const users = [
    {
        id: 1,
        email: "s@gmaul.com"
    },
    {
        id: 1,
        email: "s@gmaul.com"
    },
    {
        id: 1,
        email: "s@gmaul.com"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('loggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "soham"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

//console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "soham",
//     "coursename": "js in hindi",
//     "price": "free"
// } 

// [
//     {},
//     {},
//     {}
// ]