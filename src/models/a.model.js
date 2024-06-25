const mongoose = require("mongoose")

const a_Schema = mongoose.Schema(
    {
        a_name:{
            type : String,
            trim : true
        },
        a_contact : {
            type : Number,
            default:0
        }
    },
    {
        timestamps : true
    })

    const a = mongoose.model("A",a_Schema)
    module.exports = a