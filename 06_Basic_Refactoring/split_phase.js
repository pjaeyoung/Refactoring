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

// 리팩토링 - 1

function priceOrderUpdated(product, quantity, shippingMethod) {
  const basePrice = product.basePrice * quantity;
  const discount =
    Math.max(quantity - product.discountThresold, 0) *
    product.basePrice *
    product.discountRate;

  const price = applyShipping(basePrice, quantity, shippingMethod, discount);

  return price;
}
// 배송비 계산
function applyShipping(basePrice, quantity, shippingMethod, discount) {
  const shippingPerCase =
    basePrice > shippingMethod.discountThresold
      ? shippingMethod.discountFee
      : shippingMethod.feePerCase;
  const shippingCost = quantity * shippingPerCase;
  return basePrice - discount + shippingCost;
}

// 리팩토링 - 2
function priceOrderUpdated(product, quantity, shippingMethod) {
  const basePrice = product.basePrice * quantity;
  const discount =
    Math.max(quantity - product.discountThresold, 0) *
    product.basePrice *
    product.discountRate;

  const priceData = {};
  const price = applyShipping(
    priceData,
    basePrice,
    quantity,
    shippingMethod,
    discount
  );

  return price;
}
// 배송비 계산
function applyShipping(
  priceData,
  basePrice,
  quantity,
  shippingMethod,
  discount
) {
  const shippingPerCase =
    basePrice > shippingMethod.discountThresold
      ? shippingMethod.discountFee
      : shippingMethod.feePerCase;
  const shippingCost = quantity * shippingPerCase;
  return basePrice - discount + shippingCost;
}

// 리팩토링 - 3
function priceOrderUpdated(product, quantity, shippingMethod) {
  const basePrice = product.basePrice * quantity;
  const discount =
    Math.max(quantity - product.discountThresold, 0) *
    product.basePrice *
    product.discountRate;

  // 중간 데이터 구조
  const priceData = { basePrice, quantity, discount };
  const price = applyShipping(priceData, shippingMethod);

  return price;
}
// 배송비 계산
function applyShipping(priceData, shippingMethod) {
  const shippingPerCase =
    priceData.basePrice > shippingMethod.discountThresold
      ? shippingMethod.discountFee
      : shippingMethod.feePerCase;
  const shippingCost = priceData.quantity * shippingPerCase;
  return priceData.basePrice - priceData.discount + shippingCost;
}

// 리팩토링 - 4
function priceOrderUpdated(product, quantity, shippingMethod) {
  const priceData = calculatePricingData(product, quantity);
  const price = applyShipping(priceData, shippingMethod);

  return price;
}

// 중간 데이터 구조 생성
function calculatePricingData(product, quantity) {
  const basePrice = product.basePrice * quantity;
  const discount =
    Math.max(quantity - product.discountThresold, 0) *
    product.basePrice *
    product.discountRate;

  const priceData = { basePrice, quantity, discount };
  return priceData;
}

// 배송비 계산
function applyShipping(priceData, shippingMethod) {
  const shippingPerCase =
    priceData.basePrice > shippingMethod.discountThresold
      ? shippingMethod.discountFee
      : shippingMethod.feePerCase;
  const shippingCost = priceData.quantity * shippingPerCase;
  return priceData.basePrice - priceData.discount + shippingCost;
}

// 리팩토링 - 5
function priceOrderUpdated(product, quantity, shippingMethod) {
  const priceData = calculatePricingData(product, quantity);
  return applyShipping(priceData, shippingMethod); // 사용되지 않는 변수 할당 대신 곧장 반환하기
}

// 중간 데이터 구조 생성
function calculatePricingData(product, quantity) {
  const basePrice = product.basePrice * quantity;
  const discount =
    Math.max(quantity - product.discountThresold, 0) *
    product.basePrice *
    product.discountRate;

  const priceData = { basePrice, quantity, discount };
  return priceData;
}

// 배송비 계산
function applyShipping(priceData, shippingMethod) {
  const shippingPerCase =
    priceData.basePrice > shippingMethod.discountThresold
      ? shippingMethod.discountFee
      : shippingMethod.feePerCase;
  const shippingCost = priceData.quantity * shippingPerCase;
  return priceData.basePrice - priceData.discount + shippingCost;
}
