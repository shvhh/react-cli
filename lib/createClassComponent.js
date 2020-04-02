const fs = require('./fileSystem');
module.exports = {
  createClassComponent: componentName => {
    let fileContains = fs.readFileSync('./fileTemplates/classComponent.js');
    fileContains = fileContains.replace(new RegExp(`{{{componentName}}}`, 'g'), componentName);
    fs.writeFileSync(`${componentName}.component.jsx`, fileContains);
  },
  createFunctionalComponent: componentName => {
    let fileContains = fs.readFileSync('./fileTemplates/functionalComponent.js');
    fileContains = fileContains.replace(new RegExp(`{{{componentName}}}`, 'g'), componentName);
    fs.writeFileSync(`${componentName}.component.jsx`, fileContains);
  }
};
