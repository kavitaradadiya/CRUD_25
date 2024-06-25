const { f_Services } = require("../services")

const create_f = async (req,res)=>{
  try {

    data = req.body

    const new_f = await f_Services.create_f(data)
    
    res.status(200).json({
        success:true,
        message : "created successfully"
    })
  } catch (error) {
    res.status(400).json({
        success:false,
        message: error.message
    })
  }
}

const get_f = async (req,res)=>{
  try {

    data = req.body

    const new_f = await f_Services.get_f(data)
    if(!new_f){
      throw new Error("data not found")
    }
    
    res.status(200).json({
        success:true,
        message : "successfully",
        data : new_f
    })
  } catch (error) {
    res.status(400).json({
        success:false,
        message: error.message
    })
  }
}

const delete_f = async (req,res)=>{
  try {

    id = req.params.id

    const new_f = await f_Services.delete_f(id)
    
    res.status(200).json({
        success:true,
        message : "deleted successfully"
    })
  } catch (error) {
    res.status(400).json({
        success:false,
        message: error.message
    })
  }
}

const update_f = async (req,res)=>{
  try {

    id = req.params.f_id
    data = req.body
    const new_f = await f_Services.update_f(id,data)
    
    res.status(200).json({
        success:true,
        message : "update successfully",
        data : new_f
    })
  } catch (error) {
    res.status(400).json({
        success:false,
        message: error.message
    })
  }
}
module.exports = {
    create_f,
    get_f,
    delete_f,
    update_f
}