// Intern class which has employee class as its parent
// Intern's school is required

const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school){
        // parent constructor call using super
        super(name, id, email); 
        this.school = school;
       }

 getSchool(){
     return this.school;
 }

getRole(){
    return "Intern";
   }
}

module.exports = Intern;