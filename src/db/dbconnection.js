const { default: mongoose } = require("mongoose")

const connectDB = () =>{
    mongoose.connect("mongodb+srv://butanikavita15:FTUOchLjVL2XPODU@cluster0.czdz6bs.mongodb.net/").then((data)=>{
        if(data){
            console.log("database connect")
        }
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports = connectDB