const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const generateSite = require('./src/generateSite');
const teamMembers = [];

//prompts the menu for the employee list
const promptMenu = () =>{
    return inquirer.prompt([
        {
            type: 'list',
            name: "employeeList",
            message: " please select the employee",
            choices:['Manager', 'Engineer','Intern', 'Finish Building Team']
        }])
        .then(userPick => {
            switch(userPick.employeeList){
                case 'Manager':promptManager();
                break;
                case 'Engineer': promptEngineer();
                break;
                case 'Intern': promptIntern();
                break;
                default: buildTeam();

            }
        });

    };
    
    // inquirer prompt for manager
    const promptManager = () => {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your name? (Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter your name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: 'Enter your employee ID (Required)',
                validate: id => {
                    if (id) {
                        return true;
                    } else {
                        console.log('Please enter your employee ID!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter your email address (Required)',
                validate: email => {
                    if (email) {
                        return true;
                    } else {
                        console.log('Please enter your email address!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'Enter your office number (Required)',
                validate: officeNumber => {
                    if (officeNumber) {
                        return true;
                    } else {
                        console.log('Please enter your office number!');
                        return false;
                    }
                }
            },
        ]).then(answers => {
            console.log(answers);
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            teamMembers.push(manager);
            promptMenu();
        })

    };

    // inquirer prompt for engineer
    const promptEngineer = () => {
           
        return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the engineer? (Required)',
                validate: name => {
                    if (name) {
                        return true;
                    } else {
                        console.log('Please enter the name of engineer!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: 'Enter your employee ID (Required)',
                validate: id => {
                    if (id) {
                        return true;
                    } else {
                        console.log('Please enter your employee ID!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter your email address (Required)',
                validate: email => {
                    if (email) {
                        return true;
                    } else {
                        console.log('Please enter your email address!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'githubUsername',
                message: 'Enter your Github username. (Required)',
                validate: githubUsername => {
                    if (githubUsername) {
                        return true;
                    } else {
                        console.log('Please enter your Github username!');
                        return false;
                    }
                }
            }
        ]).then(answers => {
            console.log(answers);
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.githubUsername);
            teamMembers.push(engineer);
            promptMenu();
        })
    };

    // inquirer prompt for intern
    const promptIntern = () => {
            
        return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the intern? (Required)',
                validate: name => {
                    if (name) {
                        return true;
                    } else {
                        console.log('Please enter the name of the intern!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: 'Enter your employee ID (Required)',
                validate: id => {
                    if (id) {
                        return true;
                    } else {
                        console.log('Please enter your employee ID!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter your email address (Required)',
                validate: email => {
                    if (email) {
                        return true;
                    } else {
                        console.log('Please enter your email address!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: 'Enter your school name. (Required)',
                validate: school => {
                    if (school) {
                        return true;
                    } else {
                        console.log('Please enter your school name!');
                        return false;
                    }
                }
            }
        ]).then(answers => {
            console.log(answers);
            const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.school);
            teamMembers.push(intern);
            promptMenu();
        })
    };

    //creating the html file in dist folder when 'Finish Building Team' menu selected
const buildTeam = () => {
        console.log (`Finished Building Your Team`)
       fs.writeFileSync(path.join(__dirname,'/dist/team.html'), generateSite(teamMembers));
    };

promptMenu();