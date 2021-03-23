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
