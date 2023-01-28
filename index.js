// TODO: Include packages needed for this application
const inquirer = require('inquirer'); //adding Inquirer package for prompt

const fs = require('fs'); // enable FS from nodeJS



// TODO: Create a function to initialize app
function init() {

inquirer
  .prompt([
// TODO: Create an array of questions for user input
        {
            type: 'input',
            message: 'question?',
            name: 'q'
        }
    ])

  .then((response) => {
   var responseData = response;

    var readMeData = `halp me ${responseData}`; 

    writeToFile(readMeData);
  }
  );

// TODO: Create a function to write README file
function writeToFile(incomingData) {
    
    fs.writeFile('README.md', incomingData, (err) =>
    err ? console.error(err) : console.log('Success!')
    );
}}

// Function call to initialize app
init();
