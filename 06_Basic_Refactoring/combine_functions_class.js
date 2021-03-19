// 리팩토링 전

const reading = {
  customer: "ivan",
  quantity: 10,
  month: 5,
  year: 2017,
};

export function aquireReading() {
  return reading;
}

const aReading = aquireReading();
const basicChargeAmount = calculateBaseCharge(aReading);
const taxableCharge = Math.max(0, base - taxThresold(aReading.year));

function calculateBaseCharge(aReading) {
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
}
