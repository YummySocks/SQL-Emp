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

const viewEmps = () => {
    db.query(`SELECT employee.id, employee.first_name, employee.last_name, roles.title, roles.salary, employee.manager_id FROM employee JOIN roles ON employee.role_id = roles.id`, (err, res) => {
        console.log(`\n\n`)
        console.table(res)
        console.log(`\n\n\n\n\n\n\n\n\n`)
    })
}

const viewDeps = () => {
    db.query(`SELECT * FROM department`, (err,res) => {
        console.log(`\n\n`)
        console.table(res)
        console.log(`\n\n\n\n\n\n\n\n\n`)
    })
}

const viewRols = () => {
    db.query(`SELECT * FROM roles`, (err,res) => {
        console.log(`\n\n`)
        console.table(res)
        console.log(`\n\n\n\n\n\n\n\n\n`)
    })
}

module.exports = {
    addEmploy,
    addDepart,
    addRoles,
    upEmps,
    upMans,
    viewEmps,
    viewDeps,
    viewRols
}