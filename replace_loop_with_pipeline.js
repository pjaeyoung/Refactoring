export function acquireACountryData(input, country) {
  const lines = input.split("\n");
  const result = [];

  const loopItems = lines
    .slice(1)
    .filter((aLine) => aLine.trim() !== "")
    .map((aLine) => aLine.split(","))
    .filter((record) => record[1].trim() === country)
    .map((record) => ({ city: record[0].trim(), phone: record[2].trim() }));

  for (const record of loopItems) {
    result.push(record);
  }

  return result;
}
