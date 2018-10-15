var cats = require("cat-me")
var joke = require("knock-knock-jokes")
var faker = require("faker");

// console.log('from app.js');

var randProduct = faker.commerce.productName()
var price = faker.commerce.price()

function productList(){
  for (var i = 1; i <= 10; i++){
    console.log(i+". ", faker.fake("{{commerce.productName}} -  ${{commerce.price}}"));
  }
}
productList();



// console.log(cats());
//
// console.log(joke());
