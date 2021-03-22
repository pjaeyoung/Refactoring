// 리팩토링 전
class Order {
  constructor(data) {
    this.priority = data.priority;
  }
}

const highPriorityCount = orders.filter(
  (o) => "high" === o.priority || "rush" === o.priority
).length;
