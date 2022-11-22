const express = require("express"),
  app = express(),
  path = require("path");

const port = process.env.YOUR_PORT || process.env.PORT || 36000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/" + "index.html");
});

app.get("/ssh", (req, res) => {
  if (req.headers.authorization === "Basic YmtleTp4eFhYLjEyMzQ=") {
    res.send("{flag_dlya_gyla}");
  } else {
    res.send("Не верный пароль")
  }

  // bkey:xxXX.1234
});

app.listen(port, () => {
  console.log(`Start on port:${port}`);
});

app.use(express.static(path.join(__dirname, "public")));
