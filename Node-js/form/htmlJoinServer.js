const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  const url = req.url;
  let filePath;
  if (url === "/") {
    filePath = "./index.html";
  } else if (url === "/forgot") {
    filePath = "./forgot.html";
  } else if(url === '/login') {

    filePath = "login.html";
  }
  else{
    filePath="404.html"
  }
  fs.readFile(filePath,'utf8',(err,content)=>{
    if(err){
        res.end("error");
    }
    else{
        res.end(content);
    }
  })
})
server.listen(2000);
