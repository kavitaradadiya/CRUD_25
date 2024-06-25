const { E } = require("../models")

const create_e = (data) =>{
    return E.create(data)
}
const get_e = () =>{
    return E.find()
}
const delete_e = (id) =>{
    return E.findByIdAndDelete(id)
}
const update_e = (id,data) =>{
    return E.findByIdAndUpdate(id,data)
}
module.exports={
    create_e,
    get_e,
    delete_e,
    update_e
}