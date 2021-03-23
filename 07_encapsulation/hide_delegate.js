// 리팩토링 전

class Department {
  constructor(chargeCode, manager) {
    this._chargeCode = chargeCode;
    this._manager = manager;
  }

  get chargeCode() {
    return this._chargeCode;
  }

  set chargeCode(newChargeCode) {
    this._chargeCode = newChargeCode;
  }

  get manager() {
    return this._manager;
  }

  set manager(newManager) {
    this._manager = newManager;
  }
}

class Person {
  constructor(name, department) {
    this._name = name;
    this._deparment = department;
  }
  get name() {
    return this._name;
  }

  get department() {
    return this._deparment;
  }

  set department(newDepartment) {
    this._deparment = newDepartment;
  }
}

const person = new Person("Tony", new Department("2901", "Dyal"));
const manager = person.department.manager;

// 리팩토링 후

class Department {
  constructor(chargeCode, manager) {
    this._chargeCode = chargeCode;
    this._manager = manager;
  }

  get chargeCode() {
    return this._chargeCode;
  }

  set chargeCode(newChargeCode) {
    this._chargeCode = newChargeCode;
  }

  get manager() {
    return this._manager;
  }

  set manager(newManager) {
    this._manager = newManager;
  }
}

class Person {
  constructor(name, department) {
    this._name = name;
    this._deparment = department;
  }
  get name() {
    return this._name;
  }

  get manager() {
    return this._deparment.manager;
  }

  set department(newDepartment) {
    this._deparment = newDepartment;
  }
}

const person = new Person("Tony", new Department("2901", "Dyal"));
const manager = person.manager;
