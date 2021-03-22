// 리팩토링 전
class Order {
  constructor(data) {
    this.priority = data.priority;
  }
}

const highPriorityCount = orders.filter(
  (o) => "high" === o.priority || "rush" === o.priority
).length;

// 리팩토링 - 1
class Order {
  constructor(data) {
    this._priority = data.priority;
  }

  get priority() {
    return this._priority;
  }

  set priority(newPriority) {
    this._priority = newPriority;
  }
}

// 리팩토링 - 2
class Priority {
  constructor(value) {
    this._value = value;
  }

  toString() {
    return this._value;
  }
}

class Order {
  constructor(data) {
    this._priority = data.priority;
  }

  get priority() {
    return this._priority.toString();
  }

  set priority(newPriority) {
    this._priority = new Priority(newPriority);
  }
}

// 리팩토링 - 3
class Priority {
  constructor(value) {
    if (value instanceof Priority) {
      return value;
    } else if (Priority.legalValues().includes(value)) {
      this._value = value;
    } else {
      throw new Error(`<${value}> is invalid for Priority`);
    }
  }

  static legalValues() {
    return ["low", "normal", "high", "rush"];
  }

  toString() {
    return this._value;
  }

  get _index() {
    return Priority.legalValues().indexOf(this._value);
  }

  equals(other) {
    return this._index === other._index;
  }

  higherThan(other) {
    return this._index > other._index;
  }

  lowerThan(other) {
    return this._index < other._index;
  }
}

const highPriorityCount = orders.filter((o) =>
  o.higherThan(new Priority("normal"))
).length;
