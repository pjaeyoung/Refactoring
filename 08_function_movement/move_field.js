// 리팩토링 전 코드
class Customer {
  constructor(name, discountRate) {
    this._name = name;
    this._discountRate = discountRate;
    this._contract = new CustomerContract(dateToday());
  }

  get discountRate() {
    return this._discountRate;
  }

  becomePreffered() {
    this._discountRate += 0.03;
  }

  applyDiscount(amout) {
    return amount.subtract(amount.multiply(this._discountRate));
  }
}

class CustomerContract {
  constructor(startDate) {
    this._startDate = startDate;
  }
}

// 리팩토링 - 1
class Customer {
  constructor(name, discountRate) {
    this._name = name;
    this._discountRate = discountRate;
    this._contract = new CustomerContract(dateToday(), discountRate);
  }

  get discountRate() {
    return this._contract.discountRate;
  }

  becomePreffered() {
    this._contract.discountRate += 0.03;
  }

  applyDiscount(amout) {
    return amount.subtract(amount.multiply(this._contract.discountRate));
  }
}

class CustomerContract {
  constructor(startDate, discountRate) {
    this._startDate = startDate;
    this._discountRate = discountRate;
  }

  get discountRate() {
    return this._discountRate;
  }

  set discountRate(newDiscountRate) {
    this._discountRate = newDiscountRate;
  }
}

// 리팩토링 - 2
class Customer {
  constructor(name, discountRate) {
    this._name = name;
    this._contract = new CustomerContract(dateToday(), discountRate);
  }

  get discountRate() {
    return this._contract.discountRate;
  }

  becomePreffered() {
    this._contract.discountRate += 0.03;
  }

  applyDiscount(amout) {
    return amount.subtract(amount.multiply(this._contract.discountRate));
  }
}

class CustomerContract {
  constructor(startDate, discountRate) {
    this._startDate = startDate;
    this._discountRate = discountRate;
  }

  get discountRate() {
    return this._discountRate;
  }

  set discountRate(newDiscountRate) {
    this._discountRate = newDiscountRate;
  }
}
