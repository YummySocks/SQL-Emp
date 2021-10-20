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

const viewEmps = () => {
    db.query(`SELECT employee.first_name, employee.last_name, roles.title, roles.salary, employee.manager_id FROM employee JOIN roles ON employee.role_id = roles.id`, (err, res) => {
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
    viewEmps,
    viewDeps,
    viewRols
}