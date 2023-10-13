// Write your solution in this file!
var customerName = "bob"
function upperCaseCustomerName(string){
    string = string.toUpperCase()
    console.log(string)
}
upperCaseCustomerName(customerName)
console.log(customerName)


function setBestCustomer(){
  bestCustomer= 'not bob'
}
setBestCustomer()

function overwriteBestCustomer(){
    bestCustomer= 'maybe bob'
}
overwriteBestCustomer()

const leastFavoriteCustomer = "david"
function changeLeastFavoriteCustomer(){
    return (leastFavoriteCustomer = "ali")
}
changeLeastFavoriteCustomer()