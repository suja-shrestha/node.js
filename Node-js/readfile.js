const fs= require('fs');
fs.readFile('hello.txt',"utf8", (err, data) => {
 console.log(data);
}); 