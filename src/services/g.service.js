const { G } = require("../models")

const create_g = (data) =>{
    return G.create(data)
}
const get_g = () =>{
    return G.find()
}
const delete_g = (id) =>{
    return G.findByIdAndDelete(id)
}
const update_g = (id,data) =>{
    return G.findByIdAndUpdate(id,data)
}
module.exports={
    create_g,
    get_g,
    delete_g,
    update_g
}