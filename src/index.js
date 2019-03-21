// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    
let objCoin = {
    'H' : 50,
    'Q' : 25,
    'D' : 10,
    'N' : 5,
    'P' : 1
  };
let result = {};

if (currency < 10000) {
    for (let coin in objCoin) {
        if (objCoin[coin] <= currency) {
        let balance = currency % objCoin[coin];
        result[coin] = (currency - balance)/objCoin[coin]; 
        currency = balance;
        }
    }
}
else return {error: "You are rich, my friend! We don't have so much coins for exchange"};

return result; 
}
    
