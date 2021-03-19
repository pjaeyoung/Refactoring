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
const taxableCharge = Math.max(
  0,
  basicChargeAmount - taxThresold(aReading.year)
);

function calculateBaseCharge(aReading) {
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
}

// 리팩토링 - 1
function enrichReading(original) {
  const result = _.cloneDeep(original);
  return result;
}

const rawReading = aquireReading();
const aReading = enrichReading(rawReading);
const basicChargeAmount = calculateBaseCharge(aReading);

// 리팩토링 - 2
function enrichReading(original) {
  const result = _.cloneDeep(original);
  result.baseCharge = calculateBaseCharge(result);
  return result;
}

const rawReading = aquireReading();
const aReading = enrichReading(rawReading);
const basicChargeAmount = aReading.baseCharge;

// 리팩토링 - 3
function enrichReading(original) {
  const result = _.cloneDeep(original);
  result.baseCharge = baseRate(result.month, result.year) * result.quantity;
  return result;
}

const rawReading = aquireReading();
const aReading = enrichReading(rawReading);
const basicChargeAmount = aReading.baseCharge;

// 리팩토링 - 4
function enrichReading(original) {
  const result = _.cloneDeep(original);
  result.baseCharge = baseRate(result.month, result.year) * result.quantity;
  result.taxableCharge = Math.max(
    0,
    basicChargeAmount - taxThresold(aReading.year)
  );
  return result;
}

const rawReading = aquireReading();
const aReading = enrichReading(rawReading);
const basicChargeAmount = aReading.baseCharge;
const taxableCharge = aReading.taxableCharge;
