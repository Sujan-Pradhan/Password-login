const express = require("express");
// const { postUser } = require("../controllers/userController");
const router = express.Router();

//Login page
router.get("/login", (req, res) => res.render("Login"));

//Register Page
router.get("/register", (req, res) => res.render("Register"));

// router.post("/register", postUser);

//Register handle
router.post("/register", (req, res) => {
  // console.log(req.body);
  // res.send("Sujan");
  const { name, email, password, password2 } = req.body;
  let errors = [];

  //Check required fields
  if (!name || !email || !password || !password2) {
    errors.push({ msg: "Please fill all fields" });
  }
  //Check passwords match
  if (password !== password2) {
    errors.push({ msg: "Passwords doesn't match" });
  }

  //Check passwords length
  if (password.length < 5) {
    errors.push({ msg: "Password must be atleast five characters" });
  }
  if (errors.length > 0) {
    res.render("register", {
      errors,
      name,
      email,
      password,
      password2,
    });
  } else {
    res.send(`Hello \n\n ${name}`);
  }
});

module.exports = router;
