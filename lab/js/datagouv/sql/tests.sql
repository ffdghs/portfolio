SELECT code, name
FROM regions;

SELECT code, name, region_code
FROM departments
WHERE region_code = 84;

SELECT department_code, name, zip_code
FROM cities
WHERE department_code = 01
AND name LIKE '%bou%';

INSERT 
INTO users (
    login,
    password,
    email,
    sex,
    address,
    regionCode,
    departmentCode,
    cityId
)

VALUES (
    'testUser',
    'test',
    'test@user.com',
    'm',
    '12 rue des Rossignols',
    '01',
    '971',
    '97140'
)

