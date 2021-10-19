INSERT INTO department (name)
VALUES  ('Marketing'),
        ('Finance'),
        ('Operations'),
        ('Human Resource'),
        ('IT');

INSERT INTO roles (title, salary, department_id)
VALUES  ('Marketing analyst', 200000, 1),
        ('Marketing consultant', 120000, 1),
        ('Accountant', 130000, 2),
        ('Financial Agent', 100000, 2),
        ('Analyst', 120000, 3),
        ('Program Manager', 20000, 3),
        ('Recruiting', 140000, 4),
        ('Director', 210000, 4),
        ('Systems Engineer', 200000, 5),
        ('Help Desk', 120000, 5);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ('Patrick','Sutcliffe', 9, 1),
        ('Daniel', 'Kim', 5, 1),
        ('Josh', 'Watkins', 1, 2),
        ('Bradley', 'Kimbrell', 2, 2),
        ('Caitlin', 'Wall', 4, 2),
        ('Morgan', 'Riley', 3, 2),
        ('Matt', 'Gomez', 6, 2),
        ('Zac', 'Goad', 8, 2),
        ('Abraham','Hong', 10, 2),
        ('Courtney', 'Long', 7, 2);

