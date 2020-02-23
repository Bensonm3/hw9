const Employee = require("./Employee")

class Manager extends Employee {
    constructor(Name, Email, ID, Phone) {
        super(Name, Email, ID, Phone);
        this.Phone = Phone;
        this.title = "Manager"
        // this.ID = ID;
    }

    getOfficeNumber() {
        return this.Phone;
    }
}

module.exports = Manager