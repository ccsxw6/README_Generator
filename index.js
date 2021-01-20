const inquirer = require('inquirer'); //what does this allow? 
const fs = require('fs'); // what does this allow? 
const util = require('util'); // what does this allow? 

const writeFileAsync = util.promisify(fs.writeFile); //HUH? 

// inquirer uses an array of objects for its questions
const promptUser = () =>
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your readme?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe your project',
        },
        {
            type: 'input',
            name: 'tableofcontents',
            message: 'Provide a table of contents',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'If applicable, describe the installation process',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How is this project used?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose the license for this project.',
            choices: ["Apache", "Academic", "GNU", "ISC", "MIT", "Mozilla", "Open"]
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Who contributed to this project?',
        },
        {
            type: "input",
            name: "tests",
            message: "Is there a test included?",
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Questions?', //not sure about this one
        },
        {
            type: "input",
            name: "github",
            message: "What is your github username?",
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?",
        },
    ]);

    promptUser()

// const generateHTML = (answers) =>
//     `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
//   <title>Document</title>
// </head>
// <body>
//   <div class="jumbotron jumbotron-fluid">
//   <div class="container">
//     <h1 class="display-4">Hi! My name is ${answers.name}</h1>
//     <p class="lead">I am from ${answers.location}.</p>
//     <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
//     <ul class="list-group">
//       <li class="list-group-item">My GitHub username is ${answers.github}</li>
//       <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
//     </ul>
//   </div>
// </div>
// </body>
// </html>`;

// promptUser() calling promptUser
//     //.then is a promise
//     .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
//     .then(() => console.log('Successfully wrote to index.html'))
//     .catch((err) => console.error(err));
