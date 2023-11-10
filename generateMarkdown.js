// TODO: Create a function that returns a license badge based on which license is passed in

const writeToFile = require(".");

// If there is no license, return an empty string
 function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache-2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GPL-3.0') {
    return '[![License: GPL-3.0](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://opensource.org/licenses/GPL-3.0)';
  } else {
    return '';
  }
}
const license = 'MIT';
const badge = renderLicenseBadge(license);
console.log(badge);

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
 function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '[MIT License](https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache-2.0') {
    return '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GPL-3.0') {
    return '[GNU General Public License 3.0](https://opensource.org/licenses/GPL-3.0)';
  } else {
    return '';
  }
}

const newlicense = 'MIT';
const licenseLink = renderLicenseLink(newlicense);
console.log(licenseLink); // This will log the MIT license link


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MIT') {
    return `
## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
    `;
  } else if (license === 'Apache-2.0') {
    return `
## License

This project is licensed under the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0).
    `;
  } else if (license === 'GPL-3.0') {
    return `
## License

This project is licensed under the [GNU General Public License 3.0](https://opensource.org/licenses/GPL-3.0).
    `;
  } else {
    return '';
  }
}

const readmeLicense = 'MIT';
const licenseSection = renderLicenseSection(readmeLicense);
console.log(licenseSection); // This will log the license section for the MIT license


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${data.license}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  For questions, please contact [${data.author}](mailto:${data.email}).
  
`;
}

module.exports = generateMarkdown;