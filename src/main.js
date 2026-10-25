function calculateSubtotal(price, quantity) {
  const totalPrice = price * quantity;
  if (totalPrice <= 0) return 0;
  return totalPrice;
}

console.log(calculateSubtotal(250, 3)); // 750
console.log(calculateSubtotal(120, 1)); // 120
console.log(calculateSubtotal(250, 0)); // 0

function calculateDiscount(subtotal, isPremium) {
  if (!isPremium) return 0;
  if (subtotal <= 1000) return subtotal * 0.05;
  else return subtotal * 0.1;
  // return subtotal <= 1000 ? subtotal * 0.05 : subtotal * 0.1
//   return !isPremium ? 0 : subtotal <= 1000 ? subtotal * 0.05 : subtotal * 0.1;
}

console.log(calculateDiscount(1200, true)); // 120
console.log(calculateDiscount(800, true)); // 40
console.log(calculateDiscount(1200, false)); // 0
console.log(calculateDiscount(0, true)); // 0

function getDeliveryPrice(deliveryType) {
  switch (deliveryType) {
    case 'pickup':
      return 0;
    case 'standard':
      return 80;
    case 'express':
      return 150;
    default:
      return -1;
  }
}

console.log(getDeliveryPrice('pickup')); // 0
console.log(getDeliveryPrice('standard')); // 80
console.log(getDeliveryPrice('express')); // 150
console.log(getDeliveryPrice('drone')); // -1

function showPackingProgress(quantity) {
  if (quantity < 0) {
    console.log('Немає товарів для пакування');
    return;
  }
  for (let i = 1; i <= quantity; i += 1) {
    console.log(`Пакуємо товар ${i} з ${quantity}`);
  }
}

showPackingProgress(3);
showPackingProgress(1);
showPackingProgress(0);

function createOrderSummary(
  productName,
  price,
  quantity,
  isPremium,
  deliveryType
) {
  let allTotal = calculateSubtotal(price, quantity);
  if (allTotal === 0) return 'Замовлення неможливо оформити';
  const discount = calculateDiscount(allTotal, isPremium);
    const delivery = getDeliveryPrice(deliveryType);
    if (delivery === -1);
}

console.log(createOrderSummary('Навушники', 250, 4, true, 'standard'));
// Товар: Навушники. Кількість: 4. До сплати: 980 грн.

console.log(createOrderSummary('Клавіатура', 800, 1, true, 'pickup'));
// Товар: Клавіатура. Кількість: 1. До сплати: 760 грн.

console.log(createOrderSummary('Миша', 500, 0, false, 'express'));
// Замовлення неможливо оформити

console.log(createOrderSummary('Монітор', 5000, 1, false, 'drone'));
// Невідомий спосіб доставки
