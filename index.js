// TODO: Include packages needed for this application
const inquirer = require('inquirer'); //adding Inquirer package for prompt
const fs = require('fs'); // enable FS from nodeJS
// const generateMarkdown = require('./generateMarkdown'); // importing readme gen template file

// TODO: Create a function to initialize app
function innitBruv() {

inquirer
  .prompt([
// TODO: Create an array of questions for user input
        {
            type: 'input',
            message: 'What is your gitHub user name?',
            name: 'username'
        },
        // {
        //     type: 'input',
        //     message: 'What is the title of this project?',
        //     name: 'main_title'
        // },
        // {
        //     type: 'input',
        //     message: 'What purpose does this project serve for the user?',
        //     name: 'purpose'
        // },
        // {
        //     type: 'input',
        //     message: 'Which people have worked on this project?',
        //     name: 'team'
        // },
        // {
        //     type: 'input',
        //     message: 'What dependencies need to be installed for this project?',
        //     name: 'question1'
        // },
        // {
        //     type: 'input',
        //     message: 'What is the command to run this project?',
        //     name: 'question2'
        // },
        // {
        //     type: 'input',
        //     message: 'What is your contact e-mail address?',
        //     name: 'email_address'
        // },
        // {
        //     type: 'list',
        //     message: 'Choose the lisence for this project',
        //     name: 'lisence',
        //     choices:  ['MIT', 'BSD3', 'LGPL', 'Apache', 'Other', 'None'],
        // },
    ])

  .then((response) => {
    // var lisenceData = response.lisence
    console.log('now write to file..');
    var responseText = `text is ${response} ok`

    fs.writeFile('README.MD', responseText, (err) =>
    err ? console.error(err) : console.log("Success!"))
    
    // writeToFile(readMeData);
    // return lisenceData;
  }
  );

// TODO: Create a function to write README file
// function writeToFile(readMeData) {
    
//   fs.writeFile('README.MD', generateMarkdown(readMeData), (err) =>
//   err ? console.error(err) : console.log("Success!"))}};

  // function generateMarkdown(response) {
  //   `# ${response} 
  //   ## this read me is shite`
  //   ;}
}

// Function call to initialize app
innitBruv()


