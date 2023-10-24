const accountID = 12345;
let accountEmail = "hitesh@google.com";
var accountPassword = "1234";
accountCity = "Jaipur";
 
// accountID = 3 // not allowed

accountEmail =  "hc@gh.com"
accountPassword = "83838"
accountCity = "Bengluru"

/*

Prefer not to use var 
because of issue in block scope and functional scopes
*/

console.table([accountID, accountEmail, accountPassword, accountCity])
