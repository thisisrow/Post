const express = require("express");
const {
  registerController,
  loginController,
  updateUserController,
  requireSingIn,
} = require("../controllers/userController");
//riouter object
const router = express.Router();

//routes
// REGISTER || POST
router.post("/register", registerController);
// REGISTER || POST
router.post("/login", loginController);
//UPDATE ||PUT
router.put("/update-user",requireSingIn, updateUserController);

//export
module.exports = router;