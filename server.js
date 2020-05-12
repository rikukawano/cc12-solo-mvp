const express = require("express");
const app = express();

app.use(express.static(__dirname + "/dist")); // static files in dist will be served to the browser

const port = process.env.PORT || 4000;

// app.use("/api", (req, res) => {
//   res.send("ROAAAR 🦖");
// });

app.listen(port, () => {
  console.log("App listening on port " + port);
});
