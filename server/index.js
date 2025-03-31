const express = require("express")
const { connection } = require("mongoose")
require("dotenv").config()
const cors = require("cors")
const userRouter = require("./routes/user.route")
const NotesRouter = require("./routes/notes.routes")

const app = express()
app.use(cors)
app.use(express.json())


app.use("/api/user" , userRouter)
app.use("/api/notes", NotesRouter)

app.listen(process.env.PORT || 9090, async()=>{
     try {

        await connection
        console.log(`server is running at ${process.env.PORT || 9090} `)
        console.log("connected to db")
     } catch (error) {
        console.log(error)
        
     }
})