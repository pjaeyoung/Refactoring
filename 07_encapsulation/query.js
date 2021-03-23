// 리팩토링 전

class Order {
  constructor(quantity, item) {
    this._quantitiy = quantity;
    this._item = item;
  }

  get price() {
    const basePrice = this._quantitiy * this._item.price;
    const discountFactor = 0.98;

    if (basePrice > 1000) {
      discountFactor -= 0.03;
    }

    return basePrice * discountFactor;
  }
}

// 리팩토링 후

export default class OrderUpdated {
  constructor(quantity, item) {
    this._quantitiy = quantity;
    this._item = item;
  }

  get basePrice() {
    return this._quantitiy * this._item.price;
  }

  get discountFactor() {
    let discountFactor = 0.98;

    if (this.basePrice > 1000) {
      discountFactor -= 0.03;
    }
    return discountFactor;
  }

  get price() {
    return this.basePrice * this.discountFactor;
  }
}
