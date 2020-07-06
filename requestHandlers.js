let exec = require("child_process").exec;

// function for handling the business logic for index.html
function index (response){
   console.log("Request handler for index was called.")
  
   exec("ls -lah", function(error, stdout, stderr){
      
       response.writeHead(200, {"Content-type": "text/plain"});
       response.write(stdout);
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
