const Employee = require("../lib/Employee")

test('What we make should be an object', function(){
    let test = new Employee()

    expect(typeof(test)).toBe('object')
})

test('We should get a name back with get name', function() {
    let test = new Employee("Derek")

    expect(test.getName()).toBe("Derek")
})