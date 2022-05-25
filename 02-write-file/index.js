const fs = require('fs');
const path = require('path');

const { stdin, stdout } = process;


const document = path.join(__dirname, 'output.txt');

const writeStream = fs.createWriteStream(document);

stdout.write('Hello!\n');
stdout.write('Write something...\n');

stdin.on('data', chunk => {
  if (chunk.toString().trim() === 'exit') {
    process.exit();
  } else {
    writeStream.write(chunk);
  }
});

process.on('exit', () => stdout.write('Bye!'));

process.on('SIGINT', () => {
  process.exit();
});
