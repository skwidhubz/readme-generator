

function renderBadge(license) {
  if (license !== 'None') {
      return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return '';
}

function generateMarkdown(answers) {
return `
# ${answers.title}
${renderBadge(answers.license)}
## Table of Contents
- [Project description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Command Execution](#Command Execution)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)
## Description
${answers.description}
## Usage
${answers.usage}
## Installation
${answers.installation}
## Command Execution
${answers.command}
## Contributing
${answers.team}
## Tests
${answers.testing}
## Questions
- Find me on Github: (https://github.com/${answers.github})
- For any questions, email me at: ${answers.email}
## License
${answers.license}
`
}


module.exports = generateMarkdown