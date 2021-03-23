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
