function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render("error", { error: err });
}


errorHandler()

// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   res.send("data here");
// });

// app.listen(5000, () => {
//   console.log("server running");
// });



// const http = require("http");

// http
//   .createServer((req, res) => {
//     if (req.url == "/") {
//       res.write("dtsaa");
//       res.end();
//     }
//   })
//   .listen(5000, () => {
//     console.log("server running");
//   });
