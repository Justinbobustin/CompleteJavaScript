require('./instantHello');
var goodbye = require('./talk/goodbye.js');
var talk = require('./talk');
var question = require('./talk/question');


talk.intro();

talk.hello(talk.filename);

var answer = question.ask("What is the meaning of life?");
console.log(answer);
goodbye();