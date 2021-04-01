import { acquireACountryData } from "./replace_loop_with_pipeline";

describe("acquireACountryData(input,country)", () => {
  it("input 값이 빈 문자열이면 빈 배열이 반환되어야 합니다.", () => {
    const input = "";
    const result = acquireACountryData(input);
    expect(result).toEqual([]);
  });

  describe("Input 값이 빈문자열이 아닐 경우,", () => {
    const csv = `office, country, telephone
    chicago, USA, +1 312 373 1000
    Beiging, China, +86 4008 900 505,
    Bangalore, India, +91 80 4064 9570
    Porto Alegre, Brazil, +55 51 3079 3550
    Chennai, India, +91 44 660 44766`;

    it("country 값이 input에 존재하지 않으면 빈 배열이 반환되어야 합니다.", () => {
      const result = acquireACountryData(csv, "inexistantCountry");
      expect(result).toEqual([]);
    });

    it("Country가 India인 경우들을 모두 찾아 배열로 반환되어야 합니다. ", () => {
      const expected = [
        { city: "Bangalore", phone: "+91 80 4064 9570" },
        { city: "Chennai", phone: "+91 44 660 44766" },
      ];

      const result = acquireACountryData(csv, "India");
      expect(result).toHaveLength(2);
      expect(Array.isArray(result)).toBe(true);
      expect(result).toEqual(expected);
    });
  });
});
