// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown')

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the project title:',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a project description:',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Explain how to install the project:',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions for usage:',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license for your project:',
            choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'Other'],
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Explain how others can contribute to the project:',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Describe any tests you have for the project:',
        },
        {
            type: 'input',
            name: 'author',
            message: 'Enter your name (author of the project):',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address for questions:',
        },
    ]);
}


// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Error writing README file:', err);
        } else {
            console.log('README file has been created successfully.');
        }
    });
}

module.exports = writeToFile;


// TODO: Create a function to initialize app
const init = () => {
    questions()
        .then((answers) => {
            const markdown = generateMarkdown(answers);
            writeToFile('README.md', markdown);
        })
        .catch((error) => {
            console.error(error);
        });
}

// Function call to initialize app
init();
