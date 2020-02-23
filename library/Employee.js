class Employee {
    constructor(Name, Email, ID){
        this.Name = Name;
        this.Email = Email;
        this.title = "Employee";
        this.ID = ID;
        
    }
    getName(){
        return this.Name;
    }
    getEmail(){
        return this.Email;
    }
    getID(){
        return this.ID;
    }
   
    getRole(){
        return this.title;
    }
    
}


module.exports = Employee