const fs = require('fs');
const path = require('path');

module.exports = {
  getCurrentDirectoryBase: () => {
    return process.cwd();
  },

  directoryExists: filePath => {
    return fs.existsSync(filePath);
  },

  writeFileSync: function(fileName) {
    const currentWorkingDir = this.getCurrentDirectoryBase();
    return fs.writeFileSync(path.resolve(currentWorkingDir, fileName));
  }
};
