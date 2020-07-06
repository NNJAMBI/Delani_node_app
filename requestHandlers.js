let fs = require("fs");
let Logger = require('./logger');
let logger = new Logger('Router');
// function for handling the business logic for index.html
function index (response){
   console.log("Request handler for index was called.")
  
   // Reading the index.html file and attaching the content to the response
   fs.readFile("./Public/index.html",function(error, data){
       if (error){
           console.log(err); 
       }
       response.writeHead(200, {"Content-type": "text/html"});
       response.write(data);
       response.end();
   })
   }

// function for handling the business logic for  portfolio.html
function portfolio(response){
   console.log("Request for handler for portfolio was called.")
   response.writeHead(200, {"Content-type": "text/plain"});
   response.write("These are some of our portfolio projects");
   response.end();
  
}


exports.index = index;
exports.portfolio = portfolio;
