export default function createIteratorObject(report) {
  const result = [];

  for (const departmentEmployees of Object.values(report.allEmployees)) {
    result.push(...departmentEmployees);
  }

  return result;
}
