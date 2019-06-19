
const fs = require('fs');
const filename = process.argv[2];

const readStream = fs.createReadStream(filename, 'UTF-8');

readStream.on('data', (data) => {
  console.log("Reading file data event : ", data);
});
readStream.on('end', () => {
  console.log('file ended');
});

readStream.on('error', (e) => {
  console.log('error found', e);
});

console.log('End of file');
