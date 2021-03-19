// 리팩토링 전

let defaultOwner = { firstName: "마틴", lastName: "파울러" };

const spaceship = {};
// 참조
spaceship.owner = defaultOwner;
// 갱신
defaultOwner = { firstName: "레베카", lastName: "파슨스" };

// 리팩토링 - 1

let defaultOwner = { firstName: "마틴", lastName: "파울러" };

export function getDefaultOwner() {
  return defaultOwner;
}

export function setDefaultOwner(newDefaultOwner) {
  defaultOwner = newDefaultOwner;
}
const spaceship = {};
spaceship.owner = getDefaultOwner();

setDefaultOwner({ firstName: "레베카", lastName: "파슨스" });

// 리팩토링 - 2
// 원본에 영향주지 못 하게 복제본 반환
let defaultOwner = { firstName: "마틴", lastName: "파울러" };

export function getDefaultOwner() {
  return { ...defaultOwner };
}

export function getDefaultOwner() {
  return new Person(defaultOwner);
}

class Person {
  constructor(data) {
    this._firstName = data.firstName;
    this._lastName = data.lastName;
  }

  get lastName() {
    return this._lastName;
  }

  get firstName() {
    return this._firstName;
  }
}
