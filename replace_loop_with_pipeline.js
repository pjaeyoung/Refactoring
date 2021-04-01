export function acquireACountryData(input, country) {
  const lines = input.split("\n");
  const result = [];

  const loopItems = lines.slice(1);
  console.log(loopItems);

  for (const line of loopItems) {
    if (line.trim() === "") continue;
    const record = line.split(",");
    if (record[1].trim() === country) {
      result.push({
        city: record[0].trim(),
        phone: record[2].trim(),
      });
    }
  }

  return result;
}
