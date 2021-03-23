import Order from "./query";

describe("Order", () => {
  describe("price()", () => {
    it("basePrice가 1000보다 작은 경우, 기존 가격에 0.02% 디스카운트를 적용한다.", () => {
      const quantity = 100;
      const item = {
        price: 5,
      };

      const expectedPrice = quantity * item.price * 0.98;

      const order = new Order(quantity, item);
      expect(order.price).toBe(expectedPrice);
    });
    it("basePrice가 1000보다 큰 경우, 기존 가격에 0.05% 디스카운트를 적용한다. ", () => {
      const quantity = 100;
      const item = {
        price: 11,
      };

      const expectedPrice = quantity * item.price * 0.95;

      const order = new Order(quantity, item);
      expect(order.price).toBe(expectedPrice);
    });
  });
});
