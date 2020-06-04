const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname));

app.use(express.static(path.join(__dirname, "dist")));
app.use(favicon(path.join(__dirname, "favicon.ico")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, function () {
  console.error(`Node server listening on port ${PORT}`);
});
