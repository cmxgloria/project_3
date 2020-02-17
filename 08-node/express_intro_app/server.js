const http = require("http");
// called automatically when user make a request
const handleRequest = (req, res) => {
  // console.log("request received");
  console.log(req.method + " " + req.url + " " + new Date());
  res.end("yay");
  // yay will show on localhost
};
// createServer is request listener
const server = http.createServer(handleRequest);
// like addEventListener, port number can >3000, if 8080 can run 2 webs at the same time
server.listen(8080, () => {
  console.log("listening on port 8080");
});
