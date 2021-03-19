// 리팩토링 전

const station = {
  name: "ZB1",
  readings: [
    { temp: 47, time: "2016-11-10 09:10" },
    { temp: 53, time: "2016-11-10 09:20" },
    { temp: 58, time: "2016-11-10 09:30" },
    { temp: 53, time: "2016-11-10 09:40" },
    { temp: 51, time: "2016-11-10 09:50" },
  ],
};

const operatingPlan = {
  temperatureFloor: 50,
  temperatureCeiling: 55,
};

const alerts = readingsOutsideRange(
  station,
  operatingPlan.temperatureFloor,
  operatingPlan.temperatureCeiling
);

function readingsOutsideRange(station, min, max) {
  return station.filter((reading) => reading.temp < min || reading.temp > max);
}

// 리팩토링 - 1

class NumberRange {
  constructor(min, max) {
    this._data = { min, max };
  }

  get min() {
    return this._data.min;
  }

  get max() {
    return this._data.max;
  }
}

const operatingPlan = {
  temperatureFloor: 50,
  temperatureCeiling: 55,
};

const alerts = readingsOutsideRange(
  station,
  operatingPlan.temperatureFloor,
  operatingPlan.temperatureCeiling,
  new NumberRange(
    operatingPlan.temperatureFloor,
    operatingPlan.temperatureCeiling
  )
);

function readingsOutsideRange(station, min, max, range) {
  return station.filter(
    (reading) => reading.temp < range.min || reading.temp > range.max
  );
}

// 리팩토링 - 2
const alerts = readingsOutsideRange(
  station,
  new NumberRange(
    operatingPlan.temperatureFloor,
    operatingPlan.temperatureCeiling
  )
);

function readingsOutsideRange(station, range) {
  return station.filter(
    (reading) => reading.temp < range.min || reading.temp > range.max
  );
}

// 리팩토링 - 3
class NumberRange {
  constructor(min, max) {
    this._data = { min, max };
  }

  get min() {
    return this._data.min;
  }

  get max() {
    return this._data.max;
  }

  contains(number) {
    return number >= this.min && number <= this.max;
  }
}

function readingsOutsideRange(station, range) {
  return station.filter((reading) => !range.contains(reading));
}
