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
};

export const process = {
  login: (req, res) => {
    const { id, password } = req.body;

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.password[idx] === password) {
        res.status(HttpStatus.OK.code).json({ success: true });
      } else {
        res.status(HttpStatus.UNAUTHORIZED.code).json({ success: false });
      }
    }
  },
};

const users = {
  id: ["admin", "user", "tessa"],
  password: ["1", "12", "123"],
};

export default HttpStatus;
