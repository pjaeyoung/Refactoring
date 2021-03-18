import reportLines from "./inline-function";

describe("inline function", () => {
  describe("reportLines", () => {
    it("고객의 이름과 지역이 튜플형태로 변경되어야 합니다.", () => {
      const aCustomer = {
        name: "John",
        location: "New York",
      };
      const expected = [
        ["name", "John"],
        ["location", "New York"],
      ];

      const result = reportLines(aCustomer);
      expect(result).toEqual(expected);
    });
  });
});
