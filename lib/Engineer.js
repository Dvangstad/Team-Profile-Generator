const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(nameVal, idVal, emailVal, gitVal){
        super(nameVal, idVal, emailVal);
        this.git = gitVal
    }

    getGithub()
    
    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer