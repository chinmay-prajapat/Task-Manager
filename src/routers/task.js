const express = require("express")
const auth = require("../middleware/auth")
const Task = require("../models/task")
const router = express.Router()

router.post("/tasks", auth, async (req, res) => {
  const task = new Task({
    ...req.body,
    owner: req.user._id,
  })
  try {
    const tasks = await task.save()
    res.status(201).send(tasks)
  } catch (e) {
    res.status(400).send(e)
  }
})

router.get("/tasks", auth, async (req, res) => {
  try {
    // const tasks = await Task.find({})
    // const task = await Task.find({ owner: req.user._id })
    await req.user.populate("tasks")

    res.send(req.user.tasks)
  } catch (e) {
    res.status(500).send(e)
  }
})

router.get("/tasks/:id", auth, async (req, res) => {
  const _id = req.params.id
  try {
    // const task = await Task.findById(req.params.id)
    const task = await Task.findOne({ _id, owner: req.user._id })
    if (!task) {
      res.status(404).send("Task not found")
    }
    res.send(task)
  } catch (e) {
    res.status(500).send()
  }
})
router.patch("/tasks/:id", auth, async (req, res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ["description", "completed"]
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update),
  )
  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates" })
  }
  try {
    const task = await Task.findOne({ _id: req.params.id, owner: req.user._id })

    if (!task) {
      return res.status(404).send("Oops user not found")
    }
    updates.forEach((update) => (task[update] = req.body[update]))
    await task.save()
    res.send(task)
  } catch (e) {
    res.status(400).send(e)
  }
})

router.delete("/tasks/:id", auth, async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      owner: req.user._id,
    })
    !task ? res.status(404).send("no task found!") : res.send(task)
  } catch (e) {
    res.status(500).send(e)
  }
})
module.exports = router
