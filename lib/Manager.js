// Manager class which has employee class as its parent
// Manager's Office Number is required


const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        // parent constructor call using super
        super(name, id, email); 
        this.officeNumber = officeNumber;
       }

 getOfficeNumber(){
     return this.officeNumber;
 }

getRole(){
    return "Manager";
   }
}

module.exports = Manager;