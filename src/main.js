function calculateSubtotal(price, quantity) {
  const totalPrice = price * quantity;
  if (totalPrice <= 0) return 0;
  return totalPrice;
}

console.log(calculateSubtotal(250, 3)); // 750
console.log(calculateSubtotal(120, 1)); // 120
console.log(calculateSubtotal(250, 0)); // 0
