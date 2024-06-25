const { F } = require("../models")

const create_f = (data) =>{
    return F.create(data)
}
const get_f = () =>{
    return F.find()
}
const delete_f = (id) =>{
    return F.findByIdAndDelete(id)
}
const update_f = (id,data) =>{
    return F.findByIdAndUpdate(id,data)
}
module.exports={
    create_f,
    get_f,
    delete_f,
    update_f
}