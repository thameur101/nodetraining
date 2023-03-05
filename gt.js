/*const fd = require("os");
function myfun()
{console.log(`Total memorey is  ${fd.totalmem} and free space is ${fd.freemem}`);}
setTimeout(myfun,5000 );
*/
/*
const http = require('http')

http.createServer((req,res) => {
  res.writeHead(200,{'content-type':'text/plain'})
  res.render("C:\\Users\\Thameur\\Desktop\\js_script\\deExpress\\views\\index1.ejs")

  res.end("hello from server");

}).listen(8080)*/

  /*
var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}

//Assign the eventhandler to an event:
eventEmitter.on('sc',  () => {
  console.log('I hear a scream!');
});

//Fire the 'scream' event:
eventEmitter.emit('sc');

*/
/*

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
  res.write('<input type="file" name="filetoupload"><br>');
  res.write('<input type="submit">');
  res.write('</form>');
  res.end('kklkl');
  return res.end();
}).listen(8080);
*/
/*
const fs = require('fs');
const gt =fs.readdir('./', (err,result) => {
  
  this.then ((result) => {
    console.log(result);
  }
  
  this.this.catch((err) => {
    console.log(err);
  }
  */
// require('./bat');
// require('./sup');
/*
const mat= require('./fed.json')
console.log(mat['name '])
const fs = require("os");
const yy = fs.platform();
console.log(yy);
var fs = require('fs');
const mat= require('./fed.json')
console.log(mat['name '])
const fs = require("os");
const yy = fs.platform();
console.log(yy);
var fs = require('fs');
//create an empty file named mynewfile2.txt:
*/
/*
var fs1 = require('fs');
fs1.open('mynewfile1.txt', 'w', (err,file)=> {
  if (err) throw err;
  console.log('Saved!');
  console.log(typeof (file));  });
*/
var fs1 = require('fs');
fs1.open('mynewfile1.txt',  (err)=> {
  if (err) throw err;
  console.log('open');

});
fs1.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});