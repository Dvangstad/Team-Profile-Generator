const Employee = require("./Employee")

class Manager extends Employee {
    constructor(nameVal, idVal, emailVal, officeVal){
        super(nameVal, idVal, emailVal);
        this.officeNumber = officeVal
    }

    getRole() {
        return "Manager"
    }
}

// const testManager = new Manager("John", 123, "Doe", 321)
// console.log(testManager)
module.exports = Manager