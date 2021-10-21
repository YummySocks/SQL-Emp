// importing in all the required functions from other js files
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
// main function to handle the top of the tree in terms of questions 
const mainF = () => {
inquirer.prompt(main)
.then((answers) => mainSwitch(answers))
}
// secondary main function to handle the cases for each possible answer and to run the appropriate function
const mainSwitch = (answers) => {
        switch(answers.main) {
                case 'View All Employees':
                        viewE();
                        break;
                case 'Add Employee':
                        addE();
                        break;
                case 'Update Employee Role':
                        uppE();
                        break;
                case 'Update Employee Manager':
                        uppM();
                        break;
                case 'Update Role':
                        uppR();
                        break;
                case 'View All Roles':
                        viewR();
                        break;
                case 'Add Role':
                        addR();
                        break;
                case 'View All Departments':
                        viewD()
                        break
                case 'Add Department':
                        addDe()
                        break
                case 'Delete Department':
                        delD()
                        break
                case 'Delete Role':
                        delR()
                        break
                case 'Delete Employee':
                        delE()
                        break
                default:
                        process.exit()
        }
}
// function to start the adding of employees
const addE = () => {
        inquirer
        .prompt(addEmp)
        .then((answers)=> {
                emRole(answers.firstE, answers.lastE)
        })
}
// handles the role id
const emRole = (first,last) => {
        inquirer
        .prompt(roleEmp)
        .then((answers) => {
                manE(first,last,answers.roleE)
        })
}
// and handles the manager id
const manE = (first,last,role) => {
        inquirer
        .prompt(manageEmp)
        .then((answers) => {
                // passes along to the build function 
                addEmploy(first,last,role,answers.manEmp)
        })
        .then(() => {
                mainF()
        })
}
// function for adding departments
const addDe = () => {
        inquirer
        .prompt(addDep)
        .then((answers) => {
                addDepart(answers.depName)
                mainF()
        })
}
// function for adding roles
const addR = () => {
        inquirer
        .prompt(addRole)
        .then((answers) => {
               addRoles(answers.roleName,answers.roleSal,answers.roleDep)
               mainF()
        })
}
// function for updating employee role
const uppE = () => {
        inquirer
        .prompt(upEmp)
        .then((answers) => {
                upEmps(answers.assignRole,answers.upRole)
                mainF()
        })
}
// function for deleting employees
const delE = () => {
        inquirer
        .prompt(delEmp)
        .then((answers) => {
                delEmps(answers.delEmp)
                mainF()
        })
}
// function for deleting roles
const delR = () => {
        inquirer
        .prompt(delRole)
        .then((answers) => {
                delRols(answers.delRole)
                mainF()
        })
}
// function for deleting departments
const delD = () => {
        inquirer
        .prompt(delDep)
        .then((answers) => {
                delDeps(answers.delDep)
                mainF()
        })
}
// function for updating employee's manager
const uppM = () => {
        inquirer
        .prompt(upMan)
        .then((answers) => {
                upMans(answers.manId,answers.newMan)
                mainF()
        })
}
// function for updating roles department
const uppR = () => {
        inquirer
        .prompt(upRol)
        .then((answers) => {
                upRols(answers.roleI,answers.depI)
                mainF()
        })
}
// shows employees
const viewE = () => {
        viewEmps()
        mainF()
}
// shows departments
const viewD = () => {
        viewDeps()
        mainF()
}
// shows roles
const viewR = () => {
        viewRols()
        mainF()
}
// runs on startup
mainF()