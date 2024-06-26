const { default: mongoose } = require("mongoose");

const h_Schema = mongoose.Schema(
    {
        h_name:{
            type:String,
            trim:true
        },
        h_contact:{
            type :String,
            default:0
        }
    },
    {
        timestamps :true
    }
)

const h = mongoose.model("H",h_Schema)
module.exports = h
