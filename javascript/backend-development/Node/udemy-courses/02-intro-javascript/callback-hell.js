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

const getEmployee = (id, callback) => {
    const employee = employees.find(e => e.id === id) ?.name

    if (employee) {
        callback(null, employee);
    } else {
        callback(`Empleado con id ${id} no existe`)
    }
}

const getSalary = (id, callback) => {
    const salary = salaries.find(s => s.id === id)?.salary

    if (salary) {
        callback(null, salary);
    } else {
        callback(`No existe salario para el id ${id}`)
    }
}

const id = 2;

getEmployee(id, (err, employee) => {
    if (err) {
        console.log('ERROR');
        return console.log(err);
    }
    
    getSalary(id, (err, salary) => {
        if (err) {
            console.log('ERROR');
            return console.log(err);
        }

        console.log(`El empleado: ${employee} tiene un salario de: ${salary}`);
    });
});