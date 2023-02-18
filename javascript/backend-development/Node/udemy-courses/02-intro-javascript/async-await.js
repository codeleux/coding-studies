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

const getInfoUsuario = async(id) => {
    try {
        const employee = await getEmployee(id);
        const salary = await getSalary();

        return `El salario del empleado: ${employee} es de ${salary}`;
    } catch (err) {
        throw err;
    };
}

const id = 3;

getInfoUsuario(id)
    .then(msg => {
        console.log('TODO BIEN!');
        console.log(msg)
    })
    .catch(err => {
        console.log('TODO MAL!')
        console.log(err)
    });