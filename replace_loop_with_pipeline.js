export function acquireACountryData(input, country) {
  const lines = input.split("\n");
  const result = lines
    .slice(1)
    .filter((aLine) => aLine.trim() !== "")
    .map((aLine) => aLine.split(","))
    .filter((record) => record[1].trim() === country)
    .map((record) => ({ city: record[0].trim(), phone: record[2].trim() }));

  return result;
}
