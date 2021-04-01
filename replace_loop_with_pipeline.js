export function acquireACountryData(input, country) {
  const lines = input.split("\n");
  const result = [];

  const loopItems = lines
    .slice(1)
    .filter((aLine) => aLine.trim() !== "")
    .map((aLine) => aLine.split(","))
    .filter((record) => record[1].trim() === country);

  for (const record of loopItems) {
    result.push({
      city: record[0].trim(),
      phone: record[2].trim(),
    });
  }

  return result;
}
