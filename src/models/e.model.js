const mongoose = require("mongoose")

const e_Schema = mongoose.Schema(
    {
        e_name:{
            type : String,
            trim : true
        },
        e_contact : {
            type : Number,
            default:0
        }
    },
    {
        timestamps : true
    })

    const e = mongoose.model("E",e_Schema)
    module.exports = e