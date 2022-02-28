// tests written for name, id, email

const Employee = require('../lib/Employee')
const employee = new Employee('Jared', '1', 'jared@fakemail.com');

test('test the value of employee object',() =>{
    expect(employee.name).toBe('Jared');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('jared@fakemail.com')
  });

  test('test if we can get name from getName() method', () => {
  expect(employee.getName()).toBe('Jared');
});

test('test if we can get Id from getId() method', () => {
    expect(employee.getId()).toBe('1');
  });

  test('test if we can get Email from getEmail() method', () => {
    expect(employee.getEmail()).toBe('jared@fakemail.com');
  });

  test('test if we can get Role from getName() method', () => {
    expect(employee.getRole()).toBe('Employee');
  });
  
  
  

