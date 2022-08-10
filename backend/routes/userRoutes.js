import express from "express";
const router = express.Router();
import UserController from "../controllers/userController.js";

// Add data Route
router.post("/add", UserController.addData);

// Update data Route
router.post("/update", UserController.updateData);

// Get data Route
router.get("/getData", UserController.getData);

export default router;
