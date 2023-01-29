// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
  
// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(dataLicense) {
  if(dataLicense === true){
    console.log('license');
  } else {console.log('no license')}
};



// ReadME Generator Function with content
function generateMarkdown(data) {
  `# ${data} 
  ## this read me is shite`
  ;}



module.exports = generateMarkdown, renderLicenseSection;




// var readMeData = ` 
// # Read Me File

// ## Contains a ${response.question1}
// ` 

// console.log(response.question1);
// console.log(response.question2);