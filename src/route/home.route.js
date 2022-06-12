import express from "express";
import { renderHello, renderLogin } from "../controller/home.controller.js";

const homeRoutes = express.Router();

homeRoutes.route("/").get(renderHello);
homeRoutes.route("/login").get(renderLogin);

export default homeRoutes;
