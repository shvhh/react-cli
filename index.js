#!/usr/bin/env node

const chalk = require('chalk');

const fs = require('./lib/fileSystem');

// clear();
fs.writeFileSync('./index1.js')
console.log(chalk.yellow('hello'));

// const run = async () => {
//   const credentials = await inquirer.askGithubCredentials();
//   console.log(credentials);
// };

// run();
