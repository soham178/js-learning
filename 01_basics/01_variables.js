const accountId = 1561267
let accountEmail = "soham@google.com"
var accountPassword = "54672"
accountCity = "Kolkata"
let accountState;

// accountId = 8

accountEmail = "sdgda@google.com"
accountPassword = "5796436"
accountCity = "Mumbai"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])