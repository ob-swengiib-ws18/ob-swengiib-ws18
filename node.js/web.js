const http = require("http");

const s = http.createServer((req, res) => {
  const body = "<h1>Hurraharra! Thanks for calling!</h1>\n";
  const content_length = body.length;
  res.writeHead(200, {
    "Content-Length": content_length,
    "Content-Type": "text/html"
  });
  res.end(body);
});
console.log("up and running");
s.listen(8081);
