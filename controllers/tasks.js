const Task = require("../models/task");
const asyncWrapper = require("../middleware/asyncWrapper");
const { createNoResultFound } = require("../middleware/resultNotFound");

const getAllTask = asyncWrapper(async (req, res, next) => {
  const taskList = await Task.findAll();
  res.status(200).json(taskList);
});

const getTaskById = asyncWrapper(async (req, res, next) => {
  const task = await Task.findByPk(req.params.id);
  if (task) res.status(200).json(task);
  else next(createNoResultFound("No Task Found", 404));
});

const createTask = asyncWrapper(async (req, res, next) => {
  const task = await Task.create({
    title: req.body.title,
    status: req.body.status,
  });
  res.status(200).json(task);
});

const deleteTask = asyncWrapper(async (req, res, next) => {
  const task = await Task.findByPk(req.body.id);
  if (task) {
    await task.destroy();
    res.status(200).json({ message: "task deleted." });
  } else next(createNoResultFound("No Task Found", 404));
});

const updateTask = asyncWrapper(async (req, res, next) => {
  const task = await Task.findByPk(req.body.id);
  if (task) {
    task.title = req.body.title;
    task.status = req.body.status;
    await task.save();
    res.status(200).json(task);
  } else next(createNoResultFound("No Task Found", 404));
});

module.exports = {
  getAllTask,
  getTaskById,
  createTask,
  deleteTask,
  updateTask,
};
