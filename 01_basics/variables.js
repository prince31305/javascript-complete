const userName = "prince"

let accountEmail = "prince@gmail.com"

var accountPassword = 1234

accountTransaction = 10000

//userName = "kumar"    // not possible because we decleared is as a constant and it value not able to change
 
accountEmail = "k@mandal.com"
accountPassword = 9876
accountTransaction = 78543

let accountState;

/*
perfer not to use var because of issue in block scope and functional scope
*/


console.table([userName, accountEmail , accountPassword , accountTransaction , accountState])


