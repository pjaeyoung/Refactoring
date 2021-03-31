export function printYoungestAndTotalSalary(people) {
  return `최연소: ${getYoungest(people)}, 총 급여: ${calculateTotalSalary(
    people
  )}`;

  function calculateTotalSalary(people) {
    return people.reduce(
      (totalSalary, aPerson) => totalSalary + aPerson.salary,
      0
    );
  }

  function getYoungest(people) {
    return Math.min(...people.map((aPerson) => aPerson.age));
  }
}
