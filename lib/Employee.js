class Employee {
    constructor(nameVal, idVal, emailVal){
        this.name = nameVal;
        this.id = idVal;
        this.email = emailVal;
    }

    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return "Employee"
    }
}

// const testEmployee = new Employee("Derek", 1, "email")
// console.log(testEmployee.getRole())

module.exports = Employee