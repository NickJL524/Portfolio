//constants
const { response } = require("express");
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;
const public = path.resolve("./client/build");

//routing to my public folder
app.use(express.static(public));

app.get("*", (request, response) => {
  response.sendFile(path.resolve(public + "/index.html"));
});

app.listen(port, () => {
  console.log("Running on port", port);
});
