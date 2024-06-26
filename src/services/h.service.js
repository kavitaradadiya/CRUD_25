const { H } = require("../models")

const create_h = (data) =>{
    return H.create(data)
}
const get_h = () =>{
    return H.find()
}
const delete_h = (id) =>{
    return H.findByIdAndDelete(id)
}
const update_h = (id,data) =>{
    return H.findByIdAndUpdate(id,data)
}
module.exports = {
    create_h,
    get_h,
    delete_h,
    update_h
}