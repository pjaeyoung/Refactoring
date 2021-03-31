export function printYoungestAndTotalSalary(people) {
  return `최연소: ${getYoungest(people)}, 총 급여: ${calculateTotalSalary(
    people
  )}`;

  function calculateTotalSalary(people) {
    let result = 0;
    for (const p of people) {
      result += p.salary;
    }
    return people.reduce(
      (totalSalary, aPerson) => totalSalary + aPerson.salary,
      0
    );
  }

  function getYoungest(people) {
    let result = people[0] ? people[0].age : Infinity;
    for (const p of people) {
      if (p.age < result) {
        result = p.age;
      }
    }
    return result;
  }
}
