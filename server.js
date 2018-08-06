const http = require('http');
const port = 2018;
const objectExport = require('./objectExport');
const Msg = require('./functionExport');
const multipleExport = require('./multipleExports');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  // res.wirte(Msg());
  res.write(objectExport.name);
  res.write(multipleExport.mult2.name);
  res.end('Hello');
});

server.listen(port, () => {
  console.log(`Server is started`);
})
