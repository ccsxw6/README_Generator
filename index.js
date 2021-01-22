const fs = require('fs'); 
const inquirer = require('inquirer'); 
const util = require('util'); 

//Takes writeFile from fs, then takes promisify from util and applys that to writeFile
//Allows us to write the Readme file after user input
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
    return inquirer.prompt([ 
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
            type: 'list', //change this
            name: 'license',
            message: 'Choose the license for this project.',
            choices: ["Apache", "Academic", "GNU", "ISC", "MIT", "Mozilla", "Open"]
        },
        {
            type: 'input',
            name: 'contribution',
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
};


function generateREADME(answers) {
    return `# ${answers.title} 
      
  #### Table of Contents //creating table of contents
  1. [Project Description](#project-description) 
  2. [Installation Instructions](#installation-instructions)
  3. [Usage Information](#usage-information)
  4. [Contributor Guidelines](#contributor-guidelines)
  5. [Code of Conduct](#code-of-conduct)
  6. [Test Instructions](#test-instructions)
  7. [License](#license)
  8. [Questions](#questions)

  ## Project Description
  * ${answers.description}
  ## Installation Instructions
  * ${answers.install}
  ## Usage Information
  * ${answers.use}
  ## Contributor Guidelines
  * ${answers.contributions}
  ## Code of Conduct
  * [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.md)
  ## Test Instructions
  * ${answers.test}
  ## License
  * licensed under the ${answers.license}
  ## Questions
  * For additional help or questions about collaboration, please reach out to ${answers.email}
  * Follow me on Github at [${answers.github}](http://github.com/${answers.github})`;
    
  }
  
  promptUser().then(function(answers) {
      const readme = generateREADME(answers);
      console.log(answers) 
      return writeFileAsync("README.md", readme);
    })
    .then(function() {
      console.log(" README.md has been created!");
    })
    .catch(function(err) {
      console.log(err);
    });