// team.Html main body
const teamHtml = (teamMembers) =>{
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/1e0a13a89f.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="stylesheet.css">
    <title>Team Profile Generator</title>
</head>
<body>
    <header>
        <div class="container-fluid">
            <div class="row ">
                <div class="col-12 jumbotron mb-3 header">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>
    </header>
    <main>
    <div class="container">
        <div class="row">
            <div class="team col-12 d-flex justify-content-center">
               ${generateTeam(teamMembers)} 
            </div>
        <div> 
    </div>
    </main>
     
</body>
</html>
    `;
}


const generateTeam = (team) => {

    // refresh the html page to load new team 
    const html = [];


    // generateManager function to import details into manager employee card
    const generateManager = manager => {

        let managerHtml = `
        <div class="row employee-card">
            <div class="col card-header"> 
               <h2 class="card-title">${manager.name} </h2>
               <h3 class="card-title"><i class="fas fa-mug-hot"></i>Manager</h3>
            </div>
            <div class="col card-body">
                <ul class="list-group">
                   <li class="list-group-item">ID: ${manager.id}</li>
                   <li class="list-group-item">Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
                  <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
               </ul>
            </div>
        </div>
        `;

        html.push(managerHtml);
    }

    //// generateEngineer function to import details into engineer employee card
    const generateEngineer = engineer => {
        
        let engineerHtml = `

       <div class="row employee-card">
            <div class="col card-header">
                <h2 class="card-title"> ${engineer.name} </h2>
                <h3 class="card-title"><i class="fas fa-glasses"></i>Engineer</h3>
            </div>
            <div class="col card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${engineer.id}</li>
                    <li class="list-group-item">Email: <span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
                    <li class="list-group-item">Github: <a target="_blank" href="https://github.com/${engineer.github}">${engineer.github}</a></li>
                </ul>
            </div>
        </div>
        `;

        html.push(engineerHtml);
    }

    // generateIntern function to import details into intern employee card
    const generateIntern = intern => {
        
        let internHtml = `
        <div class="row employee-card">
            <div class="col card-header">
                <h2 class="card-title"> ${intern.name} </h2>
                <h3 class="card-title"><i class="fas fa-user-graduate"></i>Intern</h3>
            </div>
            <div class="col card-body"> 
                <ul class="list-group">
                    <li class="list-group-item">ID: ${intern.id}</li>
                    <li class="list-group-item">Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
                    <li class="list-group-item">School: ${intern.school}</li>
                </ul>
            </div>
        </div>
        `;

        html.push(internHtml);

    }
        
    //create a for loop for all the employees
    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === "Manager") {
            generateManager(team[i]);
        }
        if (team[i].getRole() === "Engineer") {
            generateEngineer(team[i]);
        }
        if (team[i].getRole() === "Intern") {
            generateIntern(team[i]);
        }
    
    

    }
   return html.join("");
}

module.exports = teamHtml;


