import UserStorage from "../models/UserStorage.js";
import User from "../models/User.js";

const HttpStatus = {
  OK: { code: 200, status: "OK" },
  CREATED: { code: 201, status: "CREATED" },
  NO_CONTENT: { code: 204, status: "NO_CONTENT" },
  BAD_REQUEST: { code: 400, status: "BAD_REQUEST" },
  UNAUTHORIZED: { code: 401, status: "UNAUTHORIZED" },
  FORBIDDEN: { code: 403, status: "FORBIDDEN" },
  NOT_FOUND: { code: 404, status: "NOT_FOUND" },
  INTERNAL_SERVER_ERROR: { code: 500, status: "INTERNAL_SERVER_ERROR" },
};

export const render = {
  hello: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
  register: (req, res) => {
    res.render("home/register");
  },
};

export const process = {
  login: (req, res) => {
    const user = new User(req.body);
    const reponse = user.login();
    if (reponse.success) {
      res.status(HttpStatus.OK.code).json(reponse);
    } else {
      res.status(HttpStatus.BAD_REQUEST.code).json(reponse);
    }
  },
  register: (req, res) => {
    const user = new User(req.body);
    const reponse = user.register();
    if (reponse.success) {
      res.status(HttpStatus.OK.code).json(reponse);
    } else {
      res.status(HttpStatus.BAD_REQUEST.code).json(reponse);
    }
  },
};

export default HttpStatus;
