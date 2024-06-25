const express = require("express")
const connectDB = require("./db/dbconnection")
const router = require("./routes")




const app = express()

app.listen(4949,()=>{
    console.log("server start")
})

app.use(express.json())
app.use("/v1",router)

connectDB()