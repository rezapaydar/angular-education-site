const jwt = require("jsonwebtoken");
module.exports = function(req, res, next) {
  const token = req.header("token");
  if (!token) return res.status(401).json({ message: "Auth Error" });
  try {
    const decoded = jwt.verify(`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhOTYyNmFmZDU0ZjNlYTkxN2ZmYjY5In0sImlhdCI6MTY4OTYxMTY1MiwiZXhwIjoxNjg5NjE1MjUyfQ.S8JxF_zh1jKEfbmFzhLFZMJ43nIGe5ytvJt2y9mlUJ0`, "randomString");
    req.user = decoded.user;
    next();
  } catch (e) {
    console.error(e);
    res.status(500).send({ message: "Invalid Token" });
  }
};