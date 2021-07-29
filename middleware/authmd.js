const jwt = require("jsonwebtoken");
const ErrorResponse = require("../utils/error-response");

const User = require("../models/User");

exports.protect = async (req, res, next) => {
  let token;
  const reqAuth = req.headers.authorization;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return next(
        new ErrorResponse("not authorized to access this route (no token)", 401)
      );
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      const user = await User.findById(decoded.id);
      if (!user) {
        return next(new ErrorResponse("user not found (from token)", 404));
      }
      req.user = user;
      next();
    } catch (error) {
      return next(
        new ErrorResponse("not authorized to access this route", 401)
      );
    }
  } else {
    return next(
      new ErrorResponse("not authorized to access this route (no auth)", 401)
    );
  }
};
