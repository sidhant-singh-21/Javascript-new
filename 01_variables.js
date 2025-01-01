const accountId = 1245
let accountEmail = "singhsiddhant3762@gmail.com"
var accountPassword = "12345"
accountCity = "Ahmedabad"

// accountId = 1234 // it cannot change because it is a constant Variables

accountEmail = "Singhsiddhant1805@gmail.com"
accountPassword = "2341"
accountCity = "Bihar"

/*

prefer not to use var because 
of issue in block scope and functional scope

*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity])

