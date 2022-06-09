const router = require("express").Router();
const authController = require("../controllers/auth.controller");
const userController = require("../controllers/user.controller");

// Authentification
router.post("/register", authController.signUp);

// Données utilisateurs
router.get("/", userController.getAllUsers);

module.exports = router;
