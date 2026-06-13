const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());
app.use(express.static(__dirname));

app.post("/saveClient", (req, res) => {
  fs.writeFileSync(
    "client.json",
    JSON.stringify(req.body, null, 2)
  );
  res.json({ message: "Saved Successfully" });
});

app.get("/getClient", (req, res) => {
  if (fs.existsSync("client.json")) {
    const data = JSON.parse(
      fs.readFileSync("client.json")
    );
    res.json(data);
  } else {
    res.json({
      name: "",
      email: ""
    });
  }
});

app.listen(3000, () => {
  console.log("Server Running on Port 3000");
});