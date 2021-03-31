export function printYoungestAndTotalSalary(people) {
  let youngest = people[0] ? people[0].age : Infinity;
  for (const p of people) {
    if (p.age < youngest) {
      youngest = p.age;
    }
  }

  return `최연소: ${youngest}, 총 급여: ${calculateTotalSalary(people)}`;

  function calculateTotalSalary(people) {
    let result = 0;
    for (const p of people) {
      result += p.salary;
    }
    return result;
  }
}
