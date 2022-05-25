const fs = require('fs');
const path = require('path');

const { stdout } = process;

const secretFolder = path.join(__dirname, 'secret-folder');

fs.readdir(secretFolder, {withFileTypes: true}, (error, files) => {    
  if (error) {
    return console.error(error.message);
  } 
  
  if (!error) {
        files.forEach(file => {
            let fileExt = path.join(secretFolder, `${file.name}`);
            const extension = path.parse(fileExt).ext.slice(1);
            const name = path.parse(fileExt).name;        
            fs.stat(path.join(fileExt, file.name), (error, stats) => {
                if (error) return console.error(error.message); 
                stdout.write(`${name} - ${fileExt} - ${stat.size}byte`);            
            });
        });
    }
});
