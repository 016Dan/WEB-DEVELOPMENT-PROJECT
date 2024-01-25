const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "alvarado",
  password: "1234",
  database: "campuscravehub",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection error:", err);
  } else {
    console.log(
      `Database connection established at ${new Date().toLocaleTimeString()}`
    );
  }
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username && password) {
    console.log(
      `Received login request for username ${username} at ${new Date().toLocaleTimeString()}`
    );

    const query = `SELECT * FROM users WHERE username = ? AND password = ?`;
    console.log(`Query: ${query}`);
    console.log(`Query Params: [${username}, ${password}]`);

    db.query(query, [username, password], (error, results) => {
      if (error) {
        console.error("Database query error:", error);
        res
          .status(500)
          .json({ error: "Internal Server Error", details: error.message });
      } else {
        console.log("Query results:", results);

        if (results.length > 0) {
          console.log("User authenticated successfully");
          res.json({ success: true });
        } else {
          console.log("Invalid username or password");
          res.status(401).json({ error: "Invalid username or password" });
        }
      }
    });
  } else {
    console.log("Bad Request");
    res.status(400).json({ error: "Bad Request" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
