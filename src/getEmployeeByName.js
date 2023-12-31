const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return employees.find(({ lastName, firstName }) =>
    firstName === employeeName || lastName === employeeName);
}

module.exports = getEmployeeByName;
