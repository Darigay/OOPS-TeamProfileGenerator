const Manager = require('../lib/Manager');
const manager = new Manager('Jared', '1', 'jared@fakemail.com', '1234567890');

test('test the value of manager object',() =>{
    expect(manager.name).toBe('Jared');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('jared@fakemail.com');
    expect(manager.officeNumber).toBe('1234567890');
  });

  test('test if we can get name from getName() method', () => {
  expect(manager.getName()).toBe('Jared');
});

test('test if we can get Id from getId() method', () => {
    expect(manager.getId()).toBe('1');
  });

  test('test if we can get Email from getEmail() method', () => {
    expect(manager.getEmail()).toBe('jared@fakemail.com');
  });

  test('test if we can get officeNumber from getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('1234567890');
  });

  test('test if we can get Role from getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
  });