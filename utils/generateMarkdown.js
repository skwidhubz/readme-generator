// function to generate lisence icon
function renderBadge(license) {
  if (license !== 'None') {
      return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return '';
}

// markdown file generator
function generateMarkdown(answers) {            // table of contents links are not working
return `
# ${answers.title}
${renderBadge(answers.license)}          
## Table of Contents                      
- [Project description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Command](#Command)
- [Contributors](#Contributors)
- [Tests](#Tests)
- [Questions](#Questions)
## Description
${answers.description}
## Usage
${answers.usage}
## Installation
The dependencies required for this project are: ${answers.installation}
## Command
The command line execution is: ${answers.command} 
## Contributors
${answers.team} contributed to this project.
## Tests
Run this command ${answers.testing} to initiate a test.
## Questions
- My GitHub page: (https://github.com/${answers.github})
- Please contact me at: ${answers.email}
## License
${answers.license}
`
}


module.exports = generateMarkdown  //exporting the fuction to be used in the index file