// const User = require("../models/userModel");

// //post new user
// exports.postUser = async (req, res) => {
//   let user = new User({
//     name: req.body.name,
//     email: req.body.email,
//     password: req.body.password,
//     password2: req.body.password2,
//   });
//   user = await user.save();
//   if (!user) {
//     return res.status(400).json({ error: "Something went wrong" });
//   }
//   res.send(user);
// };
