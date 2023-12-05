export default function iterateThroughObject(reportWithIterator) {
  const employees = [];

  for (const employees of reportWithIterator) {
    employees.push(employees);
  }

  return employees.join(' | ');
}
