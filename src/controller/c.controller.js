const { c_Services } = require("../services")

const create_c = async(req,res) => {
    try {
        const data = req.body
        const new_c = await c_Services.create_c(data)
 
       res.status(200).json({
        success : true,
        message:"created",
        data : new_c
       }) 
    } catch (error) {
        res.status(400).json({
            success: false,
            message : error.message
        })
    }
}

const get_c = async(req,res) => {
    try {
        const data = req.body
        const new_c = await c_Services.get_c(data)

        if(!new_c){
            throw new Error("data not found")
        }
 
       res.status(200).json({
        success : true,
        message:"created",
        data : new_c
       }) 
    } catch (error) {
        res.status(400).json({
            success: false,
            message : error.message
        })
    }
}
const delete_c = async(req,res) => {
    try {
        id = req.params.id
        const new_c = await c_Services.delete_c(id) 
 
       res.status(200).json({
        success : true,
        message:"deleted"
       }) 
    } catch (error) {
        res.status(400).json({
            success: false,
            message : error.message
        })
    }
}
const update_c = async(req,res) => {
    try {
        id = req.params.c_id
        data = req.body
        const new_c = await c_Services.update_c(id,data) 
 
       res.status(200).json({
        success : true,
        message:"updated",
        data : new_c
       }) 
    } catch (error) {
        res.status(400).json({
            success: false,
            message : error.message
        })
    }
}

module.exports = {
    create_c,
    get_c,
    delete_c,
    update_c
}