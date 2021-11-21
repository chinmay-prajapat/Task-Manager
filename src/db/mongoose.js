const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
})

// const Tasks = mongoose.model('Tasks', {
//     description: {
//         type:String,
//         trim:true,
//         required:true
//     },
//     completed: {
//         type:Boolean,
//         default:false
//     }
// })
// const task = new Tasks({
//     description: '  meeting  ',

// })
// task.save().then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// })
