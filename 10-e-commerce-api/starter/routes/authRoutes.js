const express = require("express");
const router = express();

const { register, login, logOut } = require("../controllers/authController");

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logOut);

module.exports = router;
