// 리팩토링 전
const organization = { name: "애크미 구스베리", country: "GB" };

const result = `<h1>${organization.name}</h1>`;
organization.name = "newName";

// 리팩토링 - 1
function getRawDataOrganization() {
  return organization;
}

const result = `<h1>${getRawDataOrganization().name}</h1>`;
getRawDataOrganization().name = "newName";

// 리팩토링 - 2

class Organization {
  constructor(data) {
    this._data = data;
  }
}

const organization = new Organization({
  name: "애크미 구스베리",
  country: "GB",
});

function getRawDataOrganization() {
  return organization._data;
}

const result = `<h1>${getRawDataOrganization().name}</h1>`;
getRawDataOrganization().name = "newName";

// 리팩토링 - 3

class Organization {
  constructor(data) {
    this._data = data;
  }

  get name() {
    return this._data.name;
  }

  set name(newName) {
    this._data.name = newName;
  }

  get country() {
    return this._data.country;
  }

  set country(newCountryCode) {
    this._data.country = newCountryCode;
  }
}

const organization = new Organization({
  name: "애크미 구스베리",
  country: "GB",
});

function getOrganization() {
  return organization;
}

// 리팩토링 - 4

class Organization {
  constructor(data) {
    this._name = data.name;
    this._country = data.country;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this.name = newName;
  }

  get country() {
    return this._country;
  }

  set country(newCountryCode) {
    this._country = newCountryCode;
  }
}

const organization = new Organization({
  name: "애크미 구스베리",
  country: "GB",
});

function getOrganization() {
  return organization;
}
