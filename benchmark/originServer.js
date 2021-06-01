/* eslint-disable @typescript-eslint/no-var-requires */

const http = require("http");

const server = http.createServer((req, res) => {
  res.end("hello world");
  console.log("hello world");
  res.once("close", () => {
    console.log("close: ", new Date().getTime());
  });
});

server.on("connection", () => {
  console.log("got connection: ", new Date().getTime());
});

server.listen(3000);
console.log("origin node server is listening on 3000");
