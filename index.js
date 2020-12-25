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
  const readmeFile = `
    # **${data.title}**

    ## Description 
    
    ${data.description}
    
    ## Table of contents
    
    - [Description](#Description)
    - [Installation](#Installation)
    - [Usage](#Usage)
    - [Licence](#Licence)
    - [Test](#Test)
    - [Contributors](#Contributors)    
    - [Repository Link](#Repository)
    - [Questions](#Questions) 
    
    
    ## Installation

        ${data.installation}  

    ## Usage
    
        ${data.usage}

    ## Test
    
        ${data.test}
    
    ## Licence
    
        ${data.licence}
    
    ## Contributors
    
        ${data.contributing}
    
    ## Questions

        ${data.questions}
  
  `;
  fs.writeFile(data.title + "-README.md", readmeFile, function (err) {
    if (err) {
      throw err;
    }
    console.log(data.title + "-README.md  created with successfully.");
  });
});
