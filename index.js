
const fs = require('fs');

const filename = process.argv[2];

const fileContent = fs.readFileSync(filename, 'UTF-8');
console.log("File contents are", fileContent);
