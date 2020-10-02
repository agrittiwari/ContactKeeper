const express = require("express");
const router = express.Router();

//@route   GET api/contacts
//@desc   Get all user contacts
// @access  Private
router.get("/", (req, res) => {
  res.send("Get all contacts ");
});

//@route   Post api/contacts
//@desc  Add new Contact
// @access  Private
router.post("/", (req, res) => {
  res.send("Addd contact ");
});

//@route   PUT api/contacts
//@desc  Update Contact
// @access  Private
router.put("/:id", (req, res) => {
  res.send("Update contact");
});

//@route   DELETE api/contacts
//@desc  DELETE Contact
// @access  Private
router.delete("/:id", (req, res) => {
  res.send("Delete contact");
});

module.exports = router;
