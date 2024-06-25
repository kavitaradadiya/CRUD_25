const mongoose = require("mongoose")

const f_Schema = mongoose.Schema(
    {
        f_name:{
            type : String,
            trim : true
        },
        f_contact : {
            type : Number,
            default:0
        }
    },
    {
        timestamps : true
    })

    const f = mongoose.model("F",f_Schema)
    module.exports = f