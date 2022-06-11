import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import ip from "ip";

dotenv.config();
const PORT = process.env.SERVER_PORT || 3000;
const app = express();

app.use(cors("*"));
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World! again");
});

app.listen(3000, () => {
  console.log(` 🟢 Server is running on ${ip.address()} port ${PORT}`);
});
