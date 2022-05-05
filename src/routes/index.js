const express = require("express");
const router = express.Router();

const { addTask } = require("../controller/add_task");
const { allTask } = require("../controller/all_task");
const { deleteTask } = require("../controller/delete_task");
const { updateTask } = require("../controller/edit_task");
router.get("/", allTask);
router.post("/addtask", addTask);
router.delete("/delete-task/:id",deleteTask);
router.patch("/update-task/:id", updateTask);

module.exports = router;
