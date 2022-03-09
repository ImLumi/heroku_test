import express from "express";

const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.json({res: "OK", message: "hello heroku cloud"});
});

app.listen(port);
