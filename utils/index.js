// TODO: Include packages needed for this application
const inquirer = require('inquirer'); //adding Inquirer package for prompt
const fs = require('fs'); // enable FS from nodeJS
const generateMarkdown = require('./generateMarkdown'); // importing readme gen template file




// generateMarkdown();

    // TODO: Create an array of questions for user input
const QUESTIONS =  [
            {
                type: 'input',
                message: 'What is your gitHub user name?',
                name: 'github'
            },
            {
                type: 'input',
                message: 'What is the title of this project?',
                name: 'title'
            },
            {
                type: 'input',
                message: 'Write a description of the project',
                name: 'description'
            },
            {
                type: 'input',
                message: 'Which people have worked on this project?',
                name: 'team'
            },
            {
                type: 'input',
                message: 'What dependencies need to be installed for this project?',
                name: 'installation'
            },
            {
                type: 'input',
                message: 'What is the command to run this project?',
                name: 'command'
            },
            {
                type: 'input',
                message: 'What is your contact e-mail address?',
                name: 'email'
            },
            {
                type: 'list',
                message: 'Choose the lisence for this project',
                name: 'lisence',
                choices:  ['MIT', 'BSD3', 'LGPL', 'Apache', 'Other', 'None'],
            },
        ]

// TODO: Create a function to initialize app
function init() {
console.log("initialize");

  
  inquirer
  .prompt( QUESTIONS )
  
  .then((answers) => {
  
    console.log("write readme FILE")
  
    fs.writeFile('README.MD', generateMarkdown(answers), (err) =>
    err ? console.error(err) : console.log("Success!"))
  }
  );}


  init();