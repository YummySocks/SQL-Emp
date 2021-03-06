// file for handling the mysql2 functionality
// importing in the required methods to be called
const mysql = require('mysql2');
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'socks1357',
      database: 'company_db'
    },
    console.log(`Connected to the movies_db database.`)
  );
// adds the employee
const addEmploy = (first,last,role,manage) => {
    const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES (?,?,?,?)`;
    const params = [first,last,role,manage]
    db.query(sql, params, (err, result) => {
        if (err){
            console.log(err)
            return;
        }
    })
}
// adds departments
const addDepart = (name) => {
    const sql = `INSERT INTO department (name)
    VALUES(?)`
    const params = name
    db.query(sql,params,(err, result) => {
        if (err){
            console.log(err)
            return;
        }
    })
}
// adds roles
const addRoles = (title, salary, depId) => {
    const sql =`INSERT INTO roles (title,salary,department_id)
    VALUES(?,?,?)`
    const params = [title,salary,depId]
    db.query(sql,params,(err,result)=> {
        if(err){
            console.log(err)
            return;
        }
    })
}
// deletes employees
const delEmps = (emI) => {
    db.query(`DELETE FROM employee
    WHERE id = ${emI}`,(err,result)=> {
        if(err){
            console.log(err)
            return;
        }
    })
}
// deletes roles
const delRols = (rolI) => {
    db.query(`DELETE FROM roles
    WHERE id = ${rolI}`,(err,result)=> {
        if(err){
            console.log(err)
            return;
        }
    })
}
// deletes departments
const delDeps = (depI) => {
    db.query(`DELETE FROM department
    WHERE id = ${depI}`,(err,result)=> {
        if(err){
            console.log(err)
            return;
        }
    })
}

// updates the employees role
const upEmps = (rolU,empI) => {
    db.query(`UPDATE employee
    SET role_id = ${rolU}
    WHERE id = ${empI}`,(err,result)=> {
        if(err){
            console.log(err)
            return;
        }
    })
}
// updates the employees manager
const upMans = (manU,empI) => {
    db.query(`UPDATE employee
    SET manager_id = ${manU}
    WHERE id = ${empI}`,(err,result)=> {
        if(err){
            console.log(err)
            return;
        }
    })
}
// updates the roles department
const upRols = (rolU, depId) => {
    db.query(`UPDATE roles
    SET department_id = ${depId}
    WHERE id = ${rolU}`,(err,result)=> {
        if(err){
            console.log(err)
            return;
        }
    })
}
// shows all employees
const viewEmps = () => {
    db.query(`SELECT employee.id, CONCAT(employee.first_name, ' ', employee.last_name) AS employee, roles.title, department.name, roles.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN roles ON employee.role_id = roles.id LEFT JOIN department ON roles.department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id ORDER BY id`, (err, res) => {
        console.log(`\n\n`)
        console.table(res)
        console.log(`\n\n\n\n\n\n\n\n\n`)
    })
}
// shows departments
const viewDeps = () => {
    db.query(`SELECT * FROM department `, (err,res) => {
        console.log(`\n\n`)
        console.table(res)
        console.log(`\n\n\n\n\n\n\n\n\n`)
    })
}
// shows roles
const viewRols = () => {
    db.query(`SELECT roles.id, roles.title, roles.salary, roles.department_id, department.name FROM roles LEFT JOIN department ON roles.department_id = department.id`, (err,res) => {
        console.log(`\n\n`)
        console.table(res)
        console.log(`\n\n\n\n\n\n\n\n\n`)
    })
}

module.exports = {
    addEmploy,
    addDepart,
    addRoles,
    delEmps,
    delRols,
    delDeps,
    upEmps,
    upMans,
    upRols,
    viewEmps,
    viewDeps,
    viewRols
}