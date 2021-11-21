require("../src/db/mongoose")
const { ObjectID } = require("bson")
const { findByIdAndDelete } = require("../src/models/task")
const Task = require("../src/models/task")

// Task.findByIdAndDelete({ _id: new ObjectID("6199ab965801d766bd96ad59") })
//   .then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
//   })
//   .then((task) => {
//     console.log(task)
//   })
//   .catch((e) => {
//     console.log(e)
//   })

const deleteTask = async (id) => {
  const deletedValue = await Task.findByIdAndDelete(id)
  const countIncom = await Task.countDocuments({ completed: false })
  return countIncom
}

deleteTask("61970eb87c691af655e7a486")
  .then((count) => {
    console.log(count)
  })
  .catch((e) => {
    console.log(e)
  })
