const employees = [
    {
        id: 1,
        name: 'Fernando'
    }, {
        id: 2,
        name: 'Linda'
    }, {
        id: 3,
        name: 'Karen'
    }
];

const salaries = [
    {
        id: 1,
        salary: 1000
    }, {
        id: 2,
        salary: 1500
    }
];

const getEmployee = id => {
    return new Promise((resolve, reject) => {
        const employee = employees.find(e => e.id === id)?.nombre;

        (employee)
            ? resolve(employee)
            : reject(`No existe empleado con id ${id}`);
    });
}

const getSalary = () => {
    return new Promise((resolve, reject) => {
        const salary = salaries.find(s => s.id === 1)?.salary;

        (salary)
          ? resolve(salary)
            : reject(`No existe salario con id ${id}`);
    });
}

const id = 3;

// getEmployee(id)
//   .then(employee => console.log(employee))
//   .catch(err => console.log(err));

// getSalary(id)
//   .then(employee => console.log(salary))
//   .catch(err => console.log(err));

let nombre;

getEmployee(id)
    .then(employee => {
        nombre = employee;
        return getSalary(id);
    })
    .then(salary => console.log(`El empleado: ${nombre} tiene un salario de: ${salary}`))
    .catch(err => console.log(err));