const main = [
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'main',
        choices: ['View All Employees','Add Employee','Update Employee Role','View All Roles','Add Role','View All Departments','Add Department','Quit']
    }
]

const addEmp = [
    {
        type: 'input',
        message: `-What is the employee first name?`,
        name: 'firstE'
    },
    {
        type: 'input',
        message: `-What is the employee last name?`,
        name: 'lastE'
    },
]

const roleEmp = [
    {
        type: 'input',
        message: `-What is the employee role`,
        name: 'roleE'
    }
]

const manageEmp = [
    {
        type: 'input',
        message: `-What is the employee's manager`,
        name: 'manEmp'
    }
]

const upEmp = [
    {
        type: 'input',
        message: `-Which employee's role do you want to update`,
        name: `upRole`
    },
    {
        type: 'input',
        message: `-Which role do you want to assign them?`,
        name: `assignRole`
    }
]

const addRole = [
    {
        type: 'input',
        message: `-What is the name of the role?`,
        name: 'roleName'
    },
    {
        type: 'input',
        message: `-What is the Salary of the role`,
        name: 'roleSal'
    }
]

const roleDep = [
    {
        type: 'input',
        message: `-What department does the role belong to?`,
        name: 'roleDep'
    }
]

const addDep = [
    {
        type: 'input',
        message: `-What is the name of the department`,
        name: 'depName'
    }
]


module.exports = {main, addEmp, roleEmp, manageEmp, upEmp, addRole, roleDep, addDep}