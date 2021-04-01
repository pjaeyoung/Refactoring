export function acquireACountryData(input, country) {
  const lines = input.split("\n");
  return lines
    .slice(1)
    .filter((aLine) => aLine.trim() !== "")
    .map((aLine) => aLine.split(","))
    .filter((fields) => fields[1].trim() === country)
    .map((fields) => ({ city: fields[0].trim(), phone: fields[2].trim() }));
}
