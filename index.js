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
            name: 'question1'
        },
        {
            type: 'input',
            message: 'question?',
            name: 'question2'
        },
    ])

  .then((response) => {
   var readMeData = ` 
   # Read Me File
   
   ## Contains a ${response.question1}
   ` 

   console.log(response.question1);
   console.log(response.question2);

    // var readMeData = `halp me ${responseData}`; 

    writeToFile(readMeData);
  }
  );

// TODO: Create a function to write README file
function writeToFile(incomingData) {
    
    fs.writeFile('README.md', incomingData, (err) =>
    err ? console.error(err) : console.log('Success!')
    )
}};

// Function call to initialize app
init();
