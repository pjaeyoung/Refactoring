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
class Reading {
  constructor(data) {
    this._customer = data.customer;
    this._quantity = data.quantity;
    this._month = data.month;
    this._year = data.year;
  }

  get customer() {
    return this._customer;
  }

  get quantity() {
    return this._quantity;
  }

  get month() {
    return this._month;
  }

  get year() {
    return this._year;
  }
}

const aReading = new Reading({
  customer: "ivan",
  quantity: 10,
  month: 5,
  year: 2017,
});

// 리팩토링 - 2
class Reading {
  constructor(data) {
    this._customer = data.customer;
    this._quantity = data.quantity;
    this._month = data.month;
    this._year = data.year;
  }

  get customer() {
    return this._customer;
  }

  get quantity() {
    return this._quantity;
  }

  get month() {
    return this._month;
  }

  get year() {
    return this._year;
  }

  get calculateBaseCharge() {
    return baseRate(this.month, this.year) * this.quantity;
  }
}

const aReading = new Reading({
  customer: "ivan",
  quantity: 10,
  month: 5,
  year: 2017,
});

const basicChargeAmount = aReading.calculateBaseCharge;

// 리팩토링 - 3
class Reading {
  constructor(data) {
    this._customer = data.customer;
    this._quantity = data.quantity;
    this._month = data.month;
    this._year = data.year;
  }

  get customer() {
    return this._customer;
  }

  get quantity() {
    return this._quantity;
  }

  get month() {
    return this._month;
  }

  get year() {
    return this._year;
  }

  get baseCharge() {
    return baseRate(this.month, this.year) * this.quantity;
  }
}

const aReading = new Reading({
  customer: "ivan",
  quantity: 10,
  month: 5,
  year: 2017,
});

const basicChargeAmount = aReading.baseCharge;

// 리팩토링 - 4
class Reading {
  constructor(data) {
    this._customer = data.customer;
    this._quantity = data.quantity;
    this._month = data.month;
    this._year = data.year;
  }

  get customer() {
    return this._customer;
  }

  get quantity() {
    return this._quantity;
  }

  get month() {
    return this._month;
  }

  get year() {
    return this._year;
  }

  get baseCharge() {
    return baseRate(this.month, this.year) * this.quantity;
  }

  get taxableCharge() {
    return Math.max(0, this.baseCharge - taxThresold(this.year));
  }
}

const aReading = new Reading({
  customer: "ivan",
  quantity: 10,
  month: 5,
  year: 2017,
});

const basicChargeAmount = aReading.baseCharge;
const taxableCharge = aReading.taxableCharge;
