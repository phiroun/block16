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
function finalCost(customer) {
  //First, determind the subtotal of each
  const subTotal = customer.pricePerRefill * customer.refills;
  let finalTotal = subTotal;

  //Second, create condition if customer has a subsciption for %25 off
  if (customer.subscription) {
    finalTotal *= 0.75;
  }

  //Third, create another condition if customer also has a coupon for $10 off
  if (customer.coupon) {
    finalTotal -= 10;
  }

  //Print the reuslt of each customer
  console.log(
    `${customer.name}` + " => " + `Your grand total is ${finalTotal}.`
  );
}

finalCost(sarah);
