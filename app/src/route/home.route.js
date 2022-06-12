import express from "express";
import { render, process } from "../controller/home.controller.js";

const homeRoutes = express.Router();

homeRoutes.route("/").get(render.hello);
homeRoutes.route("/login").get(render.login).post(process.login);

export default homeRoutes;
