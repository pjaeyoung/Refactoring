// 마이그레이션

const { assert } = require("node:console");

// 기존 함수
function circum(radius) {
  return circumference(radius);
}

// 변경시킬 함수
function circumference(radius) {
  return 2 * Math.PI * radius;
}

// 기존 클래스
class Book {
  constructor() {
    this._reservations = [];
  }

  addReservation(customer) {
    this._reservations.push(customer);
  }
}

// 변경시킬 클래스 메서드
class Book {
  constructor() {
    this._reservations = [];
  }

  addReservation(customer) {
    this.zz_addReservation(customer, false);
  }

  zz_addReservation(customer, isPriority) {
    assert(isPriority === true || isPriority === false);
    this._reservations.push(customer);
  }
}
