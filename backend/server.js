import express from 'express';

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from backend!. Welcome to the Products App");
})

app.listen(5000, (req, res) => {
  console.log('Server is running on port 5000');
});