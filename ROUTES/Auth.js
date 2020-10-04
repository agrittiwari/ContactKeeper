const express = require("express");
const router = express.Router();

const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

const User = require("../models/User");

//@route   GET  api/auth
//@desc   Get logged in User
// @access  Private
router.get("/", (req, res) => {
  res.send("Get logged in User ");
});

//@route   POST api/auth
//@desc  Auth User and Get Token
// @access  Public
router.post(
  "/",
  [
    check("email", "Please include a valid email"),
    check(
      "password",
      "please enter a password with 6 or more characters"
    ).isLength(6),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ msg: "Invalid Credentials" });
      }
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ msg: "Invalid Credentials" });
      }

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        {
          expiresIn: 36000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (error) {
      console.error(err.message);
      res.send(500).send("server error");
    }
  }
);

module.exports = router;
