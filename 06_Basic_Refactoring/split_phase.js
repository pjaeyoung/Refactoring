// 리팩토링 전

function priceOrder(product, quantity, shippingMethod) {
  const basePrice = product.basePrice * quantity;
  const discount =
    Math.max(quantity - product.discountThresold, 0) *
    product.basePrice *
    product.discountRate;
  const shippingPerCase =
    basePrice > shippingMethod.discountThresold
      ? shippingMethod.discountFee
      : shippingMethod.feePerCase;
  const shippingCost = quantity * shippingPerCase;
  const price = basePrice - discount + shippingCost;

  return price;
}
