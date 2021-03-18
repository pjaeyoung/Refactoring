import price from "./extract_variable";

describe("extract variable", () => {
  describe("price(order)", () => {
    it("수량이 500 보다 작으면 기본 가격과 배송비를 합한 값을 반환해야합니다.", () => {
      const fakeOrder = {
        quantity: 10,
        itemPrice: 100,
      };

      const result = price(fakeOrder);
      expect(result).toBe(1100);
    });
    it("수량이 500 보다 크면 할인된 가격과 배송비를 합한 값을 반환해야합니다.", () => {
      const fakeOrder = {
        quantity: 600,
        itemPrice: 100,
      };

      const result = price(fakeOrder);
      expect(result).toBe(59600);
    });
  });
});
