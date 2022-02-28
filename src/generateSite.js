
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

    <title>Team Profile Generator</title>
</head>
<body>
    <header>
    <h1> My Team </h1>
    </header>
    <main> ${generateTeam(teamMembers)} </main>
     
</body>
</html>
    `;
}


const generateTeam = (team) => {

    // refresh the html page to load new team 
    const html = [];


    // manager function to import details into html page
    const generateManager = manager => {
        console.log(manager);
        let managerHtml = `
        <div class="card" style="width: 20rem;">
            <div class="card-header"> ${manager.name} <br/>
              <i class="fas fa-mug-hot"></i>Manager</div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${manager.id}</li>
              <li class="list-group-item">Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
              <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
            </ul>
        </div>
        `;

        html.push(managerHtml);
    }

    const generateEngineer = engineer => {
        
        let engineerHtml = `
        <div class="card" style="width: 20rem;">
            <div class="card-header"> ${engineer.name} <br/>
              <i class="fas fa-glasses"></i>Engineer</div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${engineer.id}</li>
              <li class="list-group-item">Email: <span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
              <li class="list-group-item">Github: <a target="_blank" href="https://github.com/${engineer.githubUsername}">${engineer.githubUsername}</a></li>
            </ul>
        </div>
        `;

        html.push(engineerHtml);
    }

    const generateIntern = intern => {
        
        let internHtml = `
        <div class="card" style="width: 20rem;">
            <div class="card-header"> ${intern.name} <br/>
              <i class="fas fa-user-graduate"></i>Intern</div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${intern.id}</li>
              <li class="list-group-item">Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
              <li class="list-group-item">School: ${intern.school}</li>
            </ul>
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

