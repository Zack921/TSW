/* eslint-disable @typescript-eslint/no-var-requires */

const http = require("http");

const server = http.createServer((req, res) => {
  console.log("hello world");
  res.end("hello world");
});
process.stdout.write(console._stdout === process.stdout);
server.listen(3001);
console.log("origin node server is listening on 3000");
