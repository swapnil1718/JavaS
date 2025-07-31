const accountId=1718;
let accountEmail="swapniljadhav0914@gmail.com";
var accountPassword="Swapnil123";
accountCity="pune";

//accountId=18; we can not assign values to the constant variable.
let accountType;
/*
preffered to not use the var keyword
the problem of block and function scope.
*/
console.log(accountId);
//To show multiple varibale in single console.log()===>use this way.
console.table([accountId,accountEmail,accountPassword,accountCity,accountType]);