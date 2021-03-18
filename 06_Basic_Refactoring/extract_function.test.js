import printOwing from "./extract_function";

describe("extract function", () => {
  it("banner와 세부사항이 출력되어야 합니다.", () => {
    let consoleSpy = jest.spyOn(console, "log");
    const fakeInvoice = {
      customer: "John Smith",
      order: [{ amount: 100 }, { amount: 200 }],
      dueDate: null,
    };
    const logs = [
      "*************",
      "****고객 채무****",
      "*************",
      "고객명: John Smith",
      "채무액: 300",
      "마감일: 2021-3-31",
    ];

    printOwing(fakeInvoice);

    expect(consoleSpy).toHaveBeenCalledTimes(logs.length);
    logs.forEach((aLog, index) => {
      expect(consoleSpy).toHaveBeenNthCalledWith(index + 1, aLog);
    });

    consoleSpy.mockRestore();
  });
});
