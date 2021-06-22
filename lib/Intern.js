const Employee = require("./Employee")

class Intern extends Employee {
    constructor(nameVal, idVal, emailVal, schoolVal){
        super(nameVal, idVal, emailVal);
        this.school = schoolVal
    }

    getSchool()

    getRole() {
        return "Intern"
    }
}

module.exports = Intern