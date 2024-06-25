const {  B } = require("../models")

const create_b = (data) =>{
    return B.create(data)
}
const get_b = () =>{
    return B.find()
}
const delete_b = (id) =>{
    return B.findByIdAndDelete(id)
}
const update_b = (id,data) =>{
    return B.findByIdAndUpdate(id,data)
}
module.exports={
    create_b,
    get_b,
    delete_b,
    update_b
}