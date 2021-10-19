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
        ('Program Manager', 200000, 3),
        ('Recruiting', 140000, 4),
        ('Director', 210000, 4),
        ('Systems Engineer', 200000, 5),
        ('Help Desk', 120000, 5);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ('Patrick','Sutcliffe', 9, 1),
        ('Daniel', 'Kim', 5, 1),
        ('Josh', 'Watkins', 1, 3),
        ('Bradley', 'Kimbrell', 2, 3),
        ('Caitlin', 'Wall', 4, 3),
        ('Morgan', 'Riley', 3, 4),
        ('Matt', 'Gomez', 6, 4),
        ('Zac', 'Goad', 8, 4),
        ('Abraham','Hong', 10, 6),
        ('Courtney', 'Long', 7, 6);

