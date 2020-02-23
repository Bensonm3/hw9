    const generateHTML = function (teamstr) {

        return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <title>Team Org Chart</title>
   <link href="https://fonts.googleapis.com/css?family=Tomorrow&display=swap" rel="stylesheet">
   <style>
       body {
           background: url(https://www.govloop.com/wp-content/uploads/2015/09/iStock_000043086638_Medium-1024x758.jpg) center;
           background-size: 100% 100%;
           background-repeat: no-repeat;
           margin: 0%;
           height: 100vh;
       }

       .header {
           background-color: rgb(233,72,85);
           border: solid black;
           text-align: center;
           font-size: 30px;
           font-family: 'Tomorrow', ;
       }

       .container-body {
           display: flex;
           justify-content: space-evenly;
       }
       h2 {
           margin-left: 10px;
           margin-top: 0;
       }

       .card {
           background-color:rgb(246, 247, 248);
           margin-top: 4%;
           border: solid black;
           font-size: large;
           margin-left: 10px;
           margin-right: 10px;
           width: 300px;
       }
       .card-header{
           background-color: rgb(0,120,247);
           padding-top: 5px;
       }
       .card-body{
           margin: 5%;
           background-color: rgb(255,255,255);
       }
       .info{
           border: 1px solid rgb(246,247,248);
       }
       a{
           display: inline-block;
       }
       .break{
           display: block;
           white-space: pre;
       }
       .manager-body{
           display: block;
       }
   </style>
   
</head>
    
    <body>
   <div class=header>
       <h1>My Team</h1>
   </div>
   <div class="container-body">

         ${teamstr} 

         </div>
    <script src="https://kit.fontawesome.com/257de25400.js" crossorigin="anonymous"></script>         
    </body>
    
    </html>`

    }

    //arr is the employee object and looking for the properties in that class
    const generateCard = function (arr) {
        //if else statement
        let roleData;
        let spce ="";
        

        if (arr.title === "Manager") {
            spce = "</div><div class='container-body'>";
            displayTitle = `<h2><i class = "fas fa-mug-hot"></i> ${arr.title}</h2>`
            roleData = `<div class="info">Office Number: ${arr.Phone}</div>`
        } else if (arr.title === "Engineer") {
            spce ="";
            displayTitle = `<h2><i class = "fas fa-glasses"></i> ${arr.title}</h2>`
            roleData = `<div class="info">Github: <a href="https://github.com/${arr.Github}"> ${arr.Github}</a></div>`
        } else if (arr.title === "Intern") {
            spce ="";
            displayTitle = `<h2><i class = "fas fa-user-graduate"></i> ${arr.title}</h2>`
            roleData = `<div class="info">School: <a href="https://www.google.com/search?q=${arr.University}"> ${arr.University}</a></div>`
        }

        return `${spce}<div class="card">
        
<div class="card-header">
    <h2>${arr.Name}</h2>  
    ${displayTitle}
    <hr>
</div>
<div class="card-body">
        <div class="info"><a>Employee ID: ${arr.ID}</a></div>
        <div class="info">Email: <a href ="mailto:${arr.Email}">${arr.Email} </a></div>
        ${roleData}
</div>
</div>`
    }

    exports.generateHTML = generateHTML
    exports.generateCard = generateCard;