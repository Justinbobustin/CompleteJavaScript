var fs = require('fs');

console.log("Going to get a file");

var onFileLoad = function(err, file){
	console.log("Got the File");
};


fs.readFile('readFileSync.js', onFileLoad);


console.log("app continuess..");

