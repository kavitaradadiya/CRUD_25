const { d_Services } = require("../services")

const create_d = async (req,res)=>{
  try {

    data = req.body

    const new_d = await d_Services.create_d(data)
    
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

const get_d = async (req,res)=>{
  try {

    data = req.body

    const new_d = await d_Services.get_d(data)
    if(!new_d){
      throw new Error("data not found")
    }
    
    res.status(200).json({
        success:true,
        message : "successfully",
        data : new_d
    })
  } catch (error) {
    res.status(400).json({
        success:false,
        message: error.message
    })
  }
}

const delete_d = async (req,res)=>{
  try {

    id = req.params.id

    const new_d = await d_Services.delete_d(id)
    
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

const update_d = async (req,res)=>{
  try {

    id = req.params.d_id
    data = req.body
    const new_d = await d_Services.update_d(id,data)
    
    res.status(200).json({
        success:true,
        message : "update successfully",
        data : new_d
    })
  } catch (error) {
    res.status(400).json({
        success:false,
        message: error.message
    })
  }
}
module.exports = {
    create_d,
    get_d,
    delete_d,
    update_d
}