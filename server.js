const inquirer = require('inquirer');
const { addEmploy,
        addDepart,
        addRoles,
        delEmps,
        delDeps,
        delRols,
        upEmps,
        upMans,
        upRols,
        viewEmps,
        viewDeps,
        viewRols} = require('./db/connections')
const { main,
        addEmp,
        roleEmp,
        manageEmp,
        upEmp,
        addRole,
        addDep,
        upMan,
        upRol,
        delDep,
        delEmp,
        delRole} = require('./lib/questions')
const mainF = () => {
inquirer.prompt(main)
.then((answers) => mainSwitch(answers))
}
const mainSwitch = (answers) => {
        switch(answers.main) {
                case 'View All Employees':
                        console.log('View Employee function');
                        viewE();
                        break;
                case 'Add Employee':
                        console.log('adding employee');
                        addE();
                        break;
                case 'Update Employee Role':
                        console.log('up emp!');
                        uppE();
                        break;
                case 'Update Employee Manager':
                        console.log('updating employees!')
                        uppM();
                        break;
                case 'Update Role':
                        console.log('update that role20')
                        uppR();
                        break;
                case 'View All Roles':
                        console.log('view role');
                        viewR();
                        break;
                case 'Add Role':
                        console.log('adding roles!');
                        addR();
                        break;
                case 'View All Departments':
                        console.log('show me department')
                        viewD()
                        break
                case 'Add Department':
                        console.log('department adding!')
                        addDe()
                        break
                case 'Delete Department':
                        console.log('destroy depeart')
                        delD()
                        break
                case 'Delete Role':
                        console.log('destroy rolling')
                        delR()
                        break
                case 'Delete Employee':
                        console.log('destroy that employee')
                        delE()
                        break
                default:
                        process.exit()
        }
}

const addE = () => {
        inquirer
        .prompt(addEmp)
        .then((answers)=> {
                console.log(answers)
                emRole(answers.firstE, answers.lastE)
        })
}

const emRole = (first,last) => {
        inquirer
        .prompt(roleEmp)
        .then((answers) => {
                console.log(answers)
                manE(first,last,answers.roleE)
        })
}

const manE = (first,last,role) => {
        inquirer
        .prompt(manageEmp)
        .then((answers) => {
                console.log(answers)
                addEmploy(first,last,role,answers.manEmp)
        })
        .then(() => {
                mainF()
        })
}

const addDe = () => {
        inquirer
        .prompt(addDep)
        .then((answers) => {
                addDepart(answers.depName)
                console.log(`added department ${answers.depName}`)
                mainF()
        })
}

const addR = () => {
        inquirer
        .prompt(addRole)
        .then((answers) => {
               addRoles(answers.roleName,answers.roleSal,answers.roleDep)
               console.log(`added role ${answers.roleName}`)
               mainF()
        })
}

const uppE = () => {
        inquirer
        .prompt(upEmp)
        .then((answers) => {
                upEmps(answers.assignRole,answers.upRole)
                mainF()
        })
}

const delE = () => {
        inquirer
        .prompt(delEmp)
        .then((answers) => {
                delEmps(answers.delEmp)
                mainF()
        })
}

const delR = () => {
        inquirer
        .prompt(delRole)
        .then((answers) => {
                delRols(answers.delRole)
                mainF()
        })
}

const delD = () => {
        inquirer
        .prompt(delDep)
        .then((answers) => {
                delDeps(answers.delDep)
                mainF()
        })
}

const uppM = () => {
        inquirer
        .prompt(upMan)
        .then((answers) => {
                upMans(answers.manId,answers.newMan)
                mainF()
        })
}

const uppR = () => {
        inquirer
        .prompt(upRol)
        .then((answers) => {
                upRols(answers.roleI,answers.depI)
                mainF()
        })
}

const viewE = () => {
        viewEmps()
        mainF()
}

const viewD = () => {
        viewDeps()
        mainF()
}

const viewR = () => {
        viewRols()
        mainF()
}

mainF()