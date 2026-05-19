const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Welcome to the startup-adda backend");
});

app.listen(port, () => {
  console.log(`The startup adda server is running on port ${port}`);
});
