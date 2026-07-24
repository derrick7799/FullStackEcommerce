import express from "express";
import "dotenv/config";
import router from "./routes/products/index";

const port = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});






app.use('/products', router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
