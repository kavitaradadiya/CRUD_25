const mongoose = require("mongoose")

const b_Schema = mongoose.Schema(
    {
        c_name:{
            type: String,
            trim : true
        },
        c_contact:{
            type: Number,
            default:0
        }
    },
    {
        timestamps : true
    })

    const c = mongoose.model("C",b_Schema)
    module.exports = c