// const inquirer = require('inquirer');

// module.exports = {
//   askGithubCredentials: () => {
//     const questions = [
//       {
//         name: 'Text',
//         message: 'Enter your Text',
//         validate: function(value) {
//           if (value.length) {
//             return true;
//           } else {
//             return 'Please enter Text';
//           }
//         }
//       }
//     ];
//     return inquirer.prompt(questions);
//   }
// };
module.exports = require('minimist')(process.argv.slice(2));
