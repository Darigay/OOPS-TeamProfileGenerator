const Engineer = require('../lib/Engineer');
const engineer = new Engineer ('Divya', '2', 'divya@fakemail.com', 'Darigay');

test('test the value of engineer object',() =>{
    expect(engineer.name).toBe('Divya');
    expect(engineer.id).toBe('2');
    expect(engineer.email).toBE('divya@fakemail.com');
    expect(engineer.github).toBe('Darigay');
  });

  test('test if we can get name from getName() method', () => {
  expect(engineer.getName()).toBe('Divya');
});

test('test if we can get Id from getId() method', () => {
    expect(engineer.getId()).toBe('2');
  });

  test('test if we can get Email from getEmail() method', () => {
    expect(engineer.getEmail()).toBe('divya@fakemail.com');
  });

  test('test if we can get GitHub from getGithub() method', () => {
    expect(engineer.getGithub()).toBe('Darigay');
  });

  test('test if we can get Role from getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
  });