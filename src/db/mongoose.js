const mongoose = require("mongoose")

mongoose.connect(process.env.MONGODB_URL, {
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
