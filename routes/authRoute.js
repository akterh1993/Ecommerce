const express = require("express");
const  authController  = require("../controllers/authController");
const { authMiddlewares } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/admin-register", authController.admin_register);
router.post("/admin-login", authController.admin_login);
router.get("/get-user", authMiddlewares, authController.getUser);
router.post("/user-register", authController.user_register);
router.post("/user-login", authController.user_login);
router.get("/user-info", authController.user_login);

module.exports = router;
