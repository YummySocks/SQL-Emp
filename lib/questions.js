const main = [
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'main',
        choices: ['View All Employees','Add Employee','Update Employee Role','Update Employee Manager','Update Role','View All Roles','Add Role','View All Departments','Add Department','Delete Department','Delete Role','Delete Employee','Quit']
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

const upMan = [
    {
        type: 'input',
        message: `-Which employee's Manager do you want to update`,
        name: 'newMan'
    },
    {
        type: 'input',
        message: `-Which manager do you want them to have?`,
        name: 'manId'
    }
]

const upRol = [
    {
        type: 'input',
        message: `-Which role do you want to update`,
        name: 'roleI'
    },
    {
        type: 'input',
        message: `-Which department do you want the role to be in?`,
        name: 'depI'
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
    },
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

const delDep = [
    {
        type: 'input',
        message:`-What department do you want to delete?`,
        name: 'delDep'
    }
]

const delRole = [
    {
        type: 'input',
        message: `-What role do you want to delete?`,
        name: 'delRole'
    }
]

const delEmp = [
    {
        type: 'input',
        message: `-Which Employee do you want to delete?`,
        name: `delEmp`
    }
]

module.exports = {main, addEmp, roleEmp, manageEmp, upEmp, upMan, upRol, addRole, addDep, delDep, delRole, delEmp}