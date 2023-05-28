const express = require("express");

// const { authMiddleware } = require("../../middlewares/authMiddleware");
const categoryController = require("../../controllers/categoryController");

const router = express.Router();

router.post("/category-add", authMiddleware, categoryController.add_category);

module.exports = router;
