const { h_Services } = require("../services")

const create_h =async (req,res) =>{
    try {
        const data = req.body
        const new_h = await h_Services.create_h(data)
        res.status(200).json({
            success:true,
            message:"created",
            data: new_h
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message
        })
    }
}
const get_h =async (req,res) =>{
    try {
        const data = req.body
        const new_h = await h_Services.get_h(data)

        if(!new_h){
            throw new Error("data not found")
        }
        res.status(200).json({
            success:true,
            message:"created",
            data: new_h
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message
        })
    }
}
const delete_h =async (req,res) =>{
    try {
        id = req.params.id
        const new_h = await h_Services.delete_h(id)

        
        res.status(200).json({
            success:true,
            message:"deleted",

        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message
        })
    }
}
const update_h =async (req,res) =>{
    try {
        id = req.params.h_id
        data = req.body
        const new_h = await h_Services.update_h(id,data)

        
        res.status(200).json({
            success:true,
            message:"updated",
            data : new_h

        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message
        })
    }
}
module.exports = {
    create_h,
    get_h,
    delete_h,
    update_h
}