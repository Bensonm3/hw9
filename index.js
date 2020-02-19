const inquirer = require('inquirer');
const fs = require('fs');
var http = require('http');
let teamcount = 0;
let EmpID = 1;

addTeam();
function addTeam(){
inquirer.prompt(
    [
        {
            type: 'confirm',
            message: 'Add a new Team?',
            default: false,
            name: 'NewTeam',

        },
    ]
    )
    .then( async (Tmresponse) =>{
        if(Tmresponse.NewTeam === true){
            teamcount++;
            addManager();
            
        }
        // Print Results
    })
};

function addManager(){
    let EmpID = 0;
    EmpID++;
    inquirer.prompt(
        [
            {
                type: 'input',
                message: 'Team: '+teamcount+', Employee ID: '+EmpID+', Manager Name',
                name: 'MgrName'
            },
            {
                type: 'input',
                message: 'Team: '+teamcount+', Employee ID: '+EmpID+', Manager Email',
                name: 'MgrEmail'
            },
            {
                type: 'input',
                message: 'Team: '+teamcount+', Employee ID: '+EmpID+', Manager Office Phone Number',
                name: 'mgrPhone',
            },
            {
                type: 'confirm',
                message: 'Add additional Team Members?',
                default: false,
                name: 'NewEmployee',
    
            },

        ]
    )
    .then(async (mgrResponse) =>{
        //  printMgr()
        if(mgrResponse.NewEmployee === true){
            addEmployee();
        } else{
            addTeam();
        }
        // Print Results
    })
}


function addEmployee(){
    EmpID++;
    inquirer.prompt(
        [
            {
                type: 'rawlist',
                message: ' What type of employee would you like to add?',
                choices: ["Engineer", "Intern"],
                name: 'EmployeeType',
            },
        ]
    )
    .then(async (EmpResponse) =>{
        if(EmpResponse.EmployeeType === "Engineer"){
            addEngineer();
        } else{
            addIntern();
        }
    })   
}

function addEngineer(){
    inquirer.prompt(
        [
            {
                type: 'input',
                message: 'Employee ID: '+EmpID+': Engineer Name:',
                name: 'EngName',
            },
            {
                type: 'input',
                message: 'Employee ID: '+EmpID+': Engineer Email:',
                name: 'EngEmail',
            },
            {
                type: 'input',
                message: 'Employee ID: '+EmpID+': Engineer Github Username:',
                name: 'EngGithub',
            },
            {
                type: 'confirm',
                message: 'Add additional Team Members?',
                default: false,
                name: 'NewEmployee',
    
            },
        ]
    )
    .then(async (EngResponse) =>{
        if(EngResponse.NewEmployee === true){
            addEmployee()
        } else {
            addTeam();
        }
    
    })
};

function addIntern(){
    inquirer.prompt(
        [
            {
                type: 'input',
                message: 'ID: '+EmpID+': Intern Name:',
                name: 'IntName',
            },
            {
                type: 'input',
                message: 'ID: '+EmpID+': Intern Email:',
                name: 'IntEmail',
            },
            {
                type: 'input',
                message: 'ID: '+EmpID+': Intern School:',
                name: 'IntSchool',
            },
            {
                type: 'confirm',
                message: 'Add additional Team Members?',
                default: false,
                name: 'NewEmployee',
    
            },
        ]
    )
    .then(async (IntResponse) =>{
        if(IntResponse.NewEmployee === true){
            addEmployee()
        } else {
            addTeam();
        }
    
    })
};

