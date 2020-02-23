const Employee =  require("./Employee")

class Engineer extends Employee {
    constructor(name, id, email, Github){
        super(name, id, email);
        this.title = "Engineer";
        this.Github = Github;
    }

    getGithub(){
        return this.Github;
    }
    
    //Engineer now has access to Employee methods

}


module.exports = Engineer;


