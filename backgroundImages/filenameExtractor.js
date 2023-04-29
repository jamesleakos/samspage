const fs = require('fs');
const path = require('path');

function listImageFiles(directory) {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp'];

  return new Promise((resolve, reject) => {
    fs.readdir(directory, (err, files) => {
      if (err) {
        reject(err);
        return;
      }

      const filePaths = files.map((file) => path.join(directory, file));
      Promise.all(filePaths.map((filePath) => fs.promises.stat(filePath)))
        .then((stats) => {
          const imageFiles = files.filter((file, index) => {
            return stats[index].isFile() && imageExtensions.includes(path.extname(file).toLowerCase());
          });
          resolve(imageFiles);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}

function writeJsonToFile(data, outputFile) {
  return new Promise((resolve, reject) => {
    fs.writeFile(outputFile, JSON.stringify(data, null, 2), (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

// Example usage:
const directoryPath = './backgroundImages/images';
const outputPath = './backgroundImages/output.json';

listImageFiles(directoryPath)
  .then((files) => {
    return writeJsonToFile(files, outputPath);
  })
  .then(() => {
    console.log('File paths have been written to output.json');
  })
  .catch((err) => {
    console.error('Error:', err);
  });
