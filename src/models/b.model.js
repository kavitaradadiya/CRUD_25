const mongoose = require("mongoose")

const b_Schema = mongoose.Schema(
    {
        b_name:{
            type : String,
            trim : true
        },
        b_contact : {
            type : Number,
            default:0
        }
    },
    {
        timestamps : true
    })

    const b = mongoose.model("B",b_Schema)
    module.exports = b