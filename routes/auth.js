const express = require("express");
const {
  register,
  login,
  forgotPassword,
  resetPassword,
} = require("../controllers/auth");

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/forgotPassword").post(forgotPassword);
router.route("/resetPassword/:resetToken").post(resetPassword);

module.exports = router;
