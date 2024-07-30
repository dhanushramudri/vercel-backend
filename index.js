const express = require("express");
const app = express();
const cors = require("cors");

// Middleware to handle CORS and parse JSON body
app.use(cors());
app.use(express.json());

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Dummy data to send as response
const dummyData = ["Hello", "Hi", "Bye"];

// Endpoint to handle GET request
app.get("/", (req, res) => {
  res.send("Welcome to home page");
});

app.get("/api", (req, res) => {
  res.json(dummyData); // Ensure response is JSON
});

// Endpoint to handle POST request
app.post("/api", (req, res) => {
  const { name } = req.body;
  console.log(name);
  res.status(200).send("Data received");
});
