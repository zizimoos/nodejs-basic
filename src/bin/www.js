import { app } from "../app.js";
import dotenv from "dotenv";
import ip from "ip";

dotenv.config();
const PORT = process.env.SERVER_PORT || 3000;

app.listen(PORT, () => {
  console.log(` 🟢 Server is running on ${ip.address()} port ${PORT}`);
});
