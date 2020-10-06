const express = require("express");
const path = require("path");
const generatePassword = require("password-generator");
const app = express();
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Put all API endpoints under '/api'
app.get("/api/passwords", (req, res) => {
  const count = 5;
  // Generate some passwords
  const passwords = Array.from(Array(count).keys()).map((i) =>
    generatePassword(12, false)
  );
  // Return them as json
  res.json(passwords);
  console.log(`Sent ${count} passwords`);
});

const port = process.env.PORT || 5000;
app.listen(port);
console.log(`Password generator listening on ${port}`);
