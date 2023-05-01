const timmy = {
  prescription: "acetaminophen",
  pricePerRefill: 25,
  refills: 3,
  subscription: false,
  coupon: true,
};
//Timmy total cost is $75, he has no sub but has a coupon, so grand total is $65

const sarah = {
  prescription: "diphenhydramine",
  pricePerRefill: 50,
  refills: 1,
  subscription: true,
  coupon: false,
};
//Sarah total cost is $50, she has sub but no coupon, so grand total is $37.5

const rocky = {
  prescription: "phenylephrine",
  pricePerRefill: 30,
  refills: 5,
  subscription: true,
  coupon: true,
};
//Rocky total cost is $150, he has sub and coupon, so grand total is $102.5


//Create function for finalAmout
//First, determind the subtotal of each customer
//Second, create condition if customer has a subsciption for %25 off
//Third, create another condition if customer also has a coupon for $10 off
function finalAmout() {
  //Find the subtotal
  const subTotal = pricePerRefill * refills;
}
console.log(finalAmout);