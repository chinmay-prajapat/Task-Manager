const express = require("express")
require("./db/mongoose")
const userRouter = require("./routers/user")
const taskRouter = require("./routers/task")
const { json } = require("stream/consumers")
const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//   if (req.method === "GET") {
//     res.send("Get requests are disabled")
//   } else {
//     next()
//   }
// })

// app.use((req, res) =>
//   res.status(503).send("Ooops no operations can be perform at this time"),
// )

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => console.log("Server is up on port" + port))
