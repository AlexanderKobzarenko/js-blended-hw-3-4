function calculateSubtotal(price, quantity) {
  const totalPrice = price * quantity;
  if (totalPrice <= 0) return 0;
  return totalPrice;
}

console.log(calculateSubtotal(250, 3)); // 750
console.log(calculateSubtotal(120, 1)); // 120
console.log(calculateSubtotal(250, 0)); // 0

function calculateDiscount(subtotal, isPremium){
  if(isPremium){
    if (subtotal<=1000) return subtotal*0.05;
      else  return subtotal*0.1;
  }
return 0;
}
console.log(calculateDiscount(1200, true)); // 120
console.log(calculateDiscount(800, true)); // 40
console.log(calculateDiscount(1200, false)); // 0
console.log(calculateDiscount(0, true)); // 0