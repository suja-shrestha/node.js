
//CREATE FILE

const fs = require("fs");
fs.writeFile("hello.txt", "BCSIT STUDENT", (err) => {
  if (err) {
    console.log("error");
  } else {
    console.log(`File ${hello.txt} Created succesfully`);
  }
});

//DELETE FILE DIRECTORY

// const fs = require("fs");
// fs.rmdir("file", { recursive: true }, function (error) {
//   if (error) console.log(error);
//   else console.log("done");
// });

//DELETE FILES 

// const fs = require("fs");
// fs.unlink("hello.txt", function (error) {
//   if (error) console.log(error);
//   else console.log("done");
// });
