import express from "express";
import cors from "cors";

import homeRoutes from "./route/home.route.js";

export const app = express();

app.use(cors("*"));
app.use(express.json());
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/", homeRoutes);
app.use("/login", homeRoutes);
