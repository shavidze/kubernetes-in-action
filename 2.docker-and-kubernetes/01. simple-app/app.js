import { createServer } from "http";
import { hostname } from "os";

const version = 2;

const server = createServer((req, res) => {
  let i = 1e7;
  while (i > 0) i--;
  res.end(`Hello from ${hostname()} (v${version})`);
});

server.listen(8080, () => console.log(`Listen to ...`));
