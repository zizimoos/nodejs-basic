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

export const renderHello = (req, res) => {
  res.render("home/index");
};
export const renderLogin = (req, res) => {
  res.render("home/login");
};

export default HttpStatus;
