let employee = {
  firstName: "Василий",
  lastName: "Тёркин",
  age: 28,
};

console.log(employee);

function getFullName() {
  console.log(employee.firstName + " " + employee.lastName);
}

getFullName(employee);
