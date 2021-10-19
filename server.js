const cTable = require('console.table');
const inquirer = require('inquirer');
const mysql = require('mysql2');
const { main, 
        addEmp, 
        roleEmp, 
        manageEmp, 
        upEmp, 
        addRole, 
        roleDep,
        addDep,
        delDep,
        delEmp,
        delRole} = require('./lib/questions')

inquirer.prompt(main)
