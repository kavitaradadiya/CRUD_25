const { C } = require("../models")

const create_c = (data) => {
    return C.create(data)
}

const get_c =() =>{
    return C.find()
}

const delete_c =(id) =>{
    return C.findByIdAndDelete(id)
}
const update_c = (id,data) => {
    return C.findByIdAndUpdate(id,data)
}
module.exports = {
    create_c,
    get_c,
    delete_c,
    update_c
}