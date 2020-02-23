const inquirer = require('inquirer');
const fs = require('fs');
var http = require('http');
const util = require('util');
const Manager = require("./library/Manager");
const Engineer = require("./library/Engineer");
const Intern = require("./library/Intern");
const html = require("./Templates/htmltemp");
newteam = 0;


const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);

let teamArray = [];
let teamstr = ``;

async function runApp() {
    try {
         await userQuery()
 
        await printCards();
            async function printCards(){
                for (let i = 0; i < teamArray.length; i++) {
                    
                    teamstr = teamstr + html.generateCard(teamArray[i]);
                }
             }
             
            let finalHTML = await html.generateHTML(teamstr)
                
    
            console.log("here is the team string  "+teamstr)
    
             //call generate function to generate the html template literal
    
             //write file 
            await writeFileAsync("./output/index.html", finalHTML)
        
         


    } catch (err) {
         return console.log(err);
    }

};

async function userQuery(){
    let addTeam = ""; 
    do{
        try{
            
            Mgr = await inquirer.prompt(
                [
                    {
                        type: 'input',
                        message: "Manager Name",
                        name: 'Name'
                    },
                    {
                        type: 'input',
                        message: 'Manager Email',
                        name: 'Email'
                    },
                    {
                        type: 'input',
                        message: 'Manager Office Phone Number',
                        name: 'Phone',
                    },
                ]
            )
            let ID = 1;
            const manager = new Manager(Mgr.Name, Mgr.Email, ID, Mgr.Phone);
            teamArray.push(manager);
                ID++;
                await addEmployee();
                async function addEmployee(){
                    employee = await inquirer.prompt(
                        [
                            {
                                type: 'input',
                                message: "Enployee Name:",
                                name: "Name",
                            },
                            {
                                type: 'input',
                                message: 'Employee Email:',
                                name: 'Email',
                            },
                            {
                                type: 'rawlist',
                                message: ' What type of employee would you like to add?',
                                choices: ["Engineer", "Intern"],
                                name: 'Type',
                            }
                        ]
                    );
                    let specialty = "";
                    if(employee.Type ==="Engineer"){
                        specialty = await inquirer.prompt(
                            [
                                {
                                    type: 'input',
                                    message: 'Github Username',
                                    name: 'Github'
                                }
                            ]
                        )
                        const engineer = new Engineer(employee.Name, employee.Email, ID++, specialty.Github);
                        teamArray.push(engineer);
                        console.log(teamArray.length);
                    }
                    else if(employee.Type ==="Intern"){
                        specialty = await inquirer.prompt(
                            [
                                {
                                    type: 'input',
                                    message: 'Attended University:',
                                    name: 'University'
                                }
                            ]
                        )
                        const intern = new Intern(employee.Name, employee.Email, ID++, specialty.University);
                        teamArray.push(intern);
                        console.log(teamArray.length);
                    }
                    let adtlEmployee = await inquirer.prompt(
                        [
                            {
                                type: 'list',
                                name: 'Inquiry',
                                message: 'Do you want to add another employee to this team?',
                                choices: [
                                    'Yes',
                                    'No'
                                ]
                            }
                        ]
                    )
                    if(adtlEmployee.Inquiry === "Yes"){
                        await addEmployee();
                    } else{
                        await addTeam();
                    }
                }
                
        } catch (err) {
            return console.log(err);
        }
        async function addTeam(){
            addTeam = await inquirer.prompt([{
                type: "list",
                name: "continue",
                message: "Do you want to add another team?:",
                choices: [
                    "Yes",
                    "No"
                ]
        }, ]);
        if(addTeam.continue === "No"){
            newteam++;
        }
    } 
        } while (newteam === 0){
            console.log("restarting Team build");
        }

        

}



runApp();