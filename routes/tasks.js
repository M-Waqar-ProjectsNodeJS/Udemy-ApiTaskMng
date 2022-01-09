const express = require("express");
const {
  getAllTask,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

const router = express.Router();

router.get("/", getAllTask);
router.get("/:id", getTaskById);
router.post("/", createTask);
router.put("/", updateTask);
router.delete("/", deleteTask);

module.exports = router;
