const fs = require('fs');
const path = require('path');

module.exports = {
  getCurrentDirectoryBase: () => {
    return process.cwd();
  },

  directoryExists: filePath => {
    return fs.existsSync(filePath);
  },

  writeFileSync: function(fileName, content) {
    const currentWorkingDir = this.getCurrentDirectoryBase();
    return fs.writeFileSync(path.resolve(currentWorkingDir, fileName), content);
  },
  readFileSync: function(fileName, encoding = 'utf-8') {
    const currentWorkingDir = this.getCurrentDirectoryBase();
    return fs.readFileSync(path.resolve(currentWorkingDir, fileName), { encoding });
  }
};
