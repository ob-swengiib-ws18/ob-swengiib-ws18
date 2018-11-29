const fs = require("fs");

let file;
const buf = Buffer.alloc(100000);

fs.open("readfile.js", "r", (err, handle) => {
  file = handle;
});

fs.read(file, buf, 0, 100000, null, (err, length) => {
  console.log(buf.toString());
  fs.close(file, () => {});
});
