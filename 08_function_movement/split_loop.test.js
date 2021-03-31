import { printYoungestAndTotalSalary } from "./split_loop";

describe("printYoungestAndTotalSalary", () => {
  const people = [
    { name: "john", age: 22, salary: 100 },
    { name: "hans", age: 31, salary: 120 },
    { name: "lav", age: 25, salary: 80 },
    { name: "isabel", age: 28, salary: 150 },
  ];

  it("가장 어린 사람의 나이와 총 급여가 적힌 문자열이 반환되어야 합니다.", () => {
    const expected = "최연소: 22, 총 급여: 450";

    const result = printYoungestAndTotalSalary(people);

    expect(typeof result).toBe("string");
    expect(result).toEqual(expected);
  });
});
