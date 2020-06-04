DROP SEQUENCE IF EXISTS employee_id_seq;
CREATE SEQUENCE employee_id_seq
 INCREMENT 1
 MINVALUE 1
 MAXVALUE 9223372036854775807
 START 1
 CACHE 1;

DROP TABLE IF EXISTS employees;
CREATE TABLE employees (
employee_id int DEFAULT nextval('employee_id_seq'::regclass) NOT NULL,
first_name varchar,
last_name varchar,
position varchar,
office varchar,
age int,
salary int,
year_joined int,
primary key(employee_id)
);