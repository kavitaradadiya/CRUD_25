const { D } = require("../models")

const create_d = (data) =>{
    return D.create(data)
}
const get_d = () =>{
    return D.find()
}
const delete_d = (id) =>{
    return D.findByIdAndDelete(id)
}
const update_d = (id,data) =>{
    return D.findByIdAndUpdate(id,data)
}
module.exports={
    create_d,
    get_d,
    delete_d,
    update_d
}