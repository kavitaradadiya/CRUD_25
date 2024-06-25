const { g_Services } = require("../services")

const create_g = async (req,res)=>{
  try {

    data = req.body

    const new_g = await g_Services.create_g(data)
    
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

const get_g = async (req,res)=>{
  try {

    data = req.body

    const new_g = await g_Services.get_g(data)
    if(!new_g){
      throw new Error("data not found")
    }
    
    res.status(200).json({
        success:true,
        message : "successfully",
        data : new_g
    })
  } catch (error) {
    res.status(400).json({
        success:false,
        message: error.message
    })
  }
}

const delete_g = async (req,res)=>{
  try {

    id = req.params.id

    const new_g = await g_Services.delete_g(id)
    
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

const update_g = async (req,res)=>{
  try {

    id = req.params.g_id
    data = req.body
    const new_g = await g_Services.update_g(id,data)
    
    res.status(200).json({
        success:true,
        message : "update successfully",
        data : new_g
    })
  } catch (error) {
    res.status(400).json({
        success:false,
        message: error.message
    })
  }
}
module.exports = {
    create_g,
    get_g,
    delete_g,
    update_g
}