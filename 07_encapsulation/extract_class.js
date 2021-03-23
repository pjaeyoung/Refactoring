// 리팩토링 전

class Person {
  constructor(name, officeAreaCode, officeNumber) {
    this._name = name;
    this._officeAreaCode = officeAreaCode;
    this._officeNumber = officeNumber;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  get telephoneNumber() {
    return `${this._officeAreaCode} ${this._officeNumber}`;
  }

  get officeAreaCode() {
    return this._officeAreaCode;
  }

  set officeAreaCode(newOfficeAreaCode) {
    this._officeAreaCode = newOfficeAreaCode;
  }

  get officeNumber() {
    return this._officeNumber;
  }

  set officeNumber(newOfficeNumber) {
    this._officeNumber = newOfficeNumber;
  }
}

// 리팩토링 후
class TelephoneNumber {
  constructor(areaCode, number) {
    this._areaCode = areaCode;
    this._number = number;
  }

  get toString() {
    return `${this._areaCode} ${this._number}`;
  }

  get areaCode() {
    return this._areaCode;
  }

  set areaCode(newAreaCode) {
    this._areaCode = newAreaCode;
  }

  get number() {
    return this._number;
  }

  set number(newNumber) {
    this._number = newNumber;
  }
}
class Person {
  constructor(name, officeAreaCode, officeNumber) {
    this._name = name;
    this._officeAreaCode = officeAreaCode;
    this._officeNumber = officeNumber;
    this._telephoneNumber = new TelephoneNumber(officeAreaCode, officeNumber);
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  get telephoneNumber() {
    return this._telephoneNumber.toString();
  }

  get officeAreaCode() {
    return this._telephoneNumber.areaCode;
  }

  set officeAreaCode(newOfficeAreaCode) {
    this._telephoneNumber.areaCode = newOfficeAreaCode;
  }

  get officeNumber() {
    return this._telephoneNumber.number;
  }

  set officeNumber(newOfficeNumber) {
    this._telephoneNumber.number = newOfficeNumber;
  }
}
