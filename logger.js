let fs = require('fs');

class Logger {
   // Create a constructor for the Logger class and pass in the name of the module that each log will belong to
   constructor(module){

       this.module = module
      
       // Create a write stream so that we'll be able to write the log messages into the log file
       let logStream  = fs.createWriteStream('./logs', {flags: 'a'});
      
       // Create function that logs info level messages
       let info = function (msg){
           // Define the log level
           var level = 'info'.toUpperCase();
          
           // Format the message into the desired format
           let message = `${new Date()} | ${level} | ${module} | ${msg} \n`;
          
           // Write the formatted message logged into the log file
           logStream.write(message);
       }
       // Initialize the info function
       this.info =info;

       // Create a function that logs error level messages
       let error = function (msg){
           // Define the log level
           var level = 'error'.toUpperCase();
           // Format the message into the desired format
           let message = `${new Date()} | ${level} | ${module} | ${msg} \n`;
          
           // Write the formatted message logged into the log file
           logStream.write(message);
       }
       // initialize the error function
       this.error =error;
   }
}

module.exports = Logger;