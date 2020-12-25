const inquirer = require("inquirer");
const fs = require("fs");
const questions = [
  {
    type: "input",
    name: "title",
    message: "What name have you decided for this project?",
  },
  {
    type: "input",
    name: "description",
    message: "Describe your project in few words.",
  },
  {
    type: "input",
    name: "installation",
    message: "Please provide the installation guides.",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide the project usage guide.",
  },
  {
    type: "input",
    name: "test",
    message: "Please provide the guidance of how to test the app",
  },
  {
    type: "input",
    name: "contributing",
    message: "Please provide the contributers.",
  },
  {
    type: "list",
    name: "licence",
    message: "Please choose a project licence",
    choices: ["Apache 2.0", "GNU General Public License", "MIT License"],
  },
  {
    type: "input",
    name: "questions",
    message: "Please enter a email so people could reach out for questions.",
  },
];

inquirer.prompt(questions).then((data) => {
  fs.writeFile(
    "output/" + data.title + "-README.md",
    `# **${data.title}**
## Description 

${data.description}

## Table of contents

- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Test](#Test)
- [Contributors](#Contributors)    
- [Questions](#Questions) 
- [Licence](#Licence)

## Installation
    This is a mandatory command to get started with our app.
    - ${data.installation}  

## Usage
    Please run the following commands to run the app.
    - ${data.usage}

## Test
    You can test our app with following commands.
    - ${data.test}

## Contributors
    Following are our amazing folks who have added a lot to this project. Consider donating them via PayPal!
    - ${data.contributing}

## Questions
    You can reach out to me for any kinds of questions or bug reports at ${data.questions}  

## Licence
    This project is licensed under ${data.licence}
  `,
    function (err) {
      if (err) {
        throw err;
      }
      console.log(data.title + "-README.md  created with successfully.");
    }
  );
});
