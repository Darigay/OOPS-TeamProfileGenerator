const Intern = require('../lib/Intern');
const intern = new Intern ('John', '5', 'john@fakemail.com', '2university');

test('test the value of engineer object',() =>{
    expect(intern.name).toBe('John');
    expect(intern.id).toBe('5');
    expect(intern.email).toBE('john@fakemail.com');
    expect(intern.school).toBe('2university');
  });

  test('test if we can get name from getName() method', () => {
  expect(intern.getName()).toBe('John');
});

test('test if we can get Id from getId() method', () => {
    expect(intern.getId()).toBe('5');
  });

  test('test if we can get Email from getEmail() method', () => {
    expect(intern.getEmail()).toBe('john@fakemail.com');
  });

  test('test if we can get School from getSchool() method', () => {
    expect(intern.getSchool()).toBe('2university');
  });

  test('test if we can get Role from getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
  });