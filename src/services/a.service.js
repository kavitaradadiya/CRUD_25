const { A } = require("../models")

const create_a = (data) =>{
    return A.create(data)
}
const get_a = () =>{
    return A.find()
}
const delete_a = (id) =>{
    return A.findByIdAndDelete(id)
}
const update_a = (id,data) =>{
    return A.findByIdAndUpdate(id,data)
}
module.exports={
    create_a,
    get_a,
    delete_a,
    update_a
}