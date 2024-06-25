const { e_Services } = require("../services")

const create_e = async (req,res)=>{
  try {

    data = req.body

    const new_e = await e_Services.create_e(data)
    
    res.status(200).json({
        success:true,
        message : "created successfully",
        data : new_e
    })
  } catch (error) {
    res.status(400).json({
        success:false,
        message: error.message
    })
  }
}

const get_e = async (req,res)=>{
  try {

    data = req.body

    const new_e = await e_Services.get_e(data)
    if(!new_e){
      throw new Error("data not found")
    }
    
    res.status(200).json({
        success:true,
        message : "successfully",
        data : new_e
    })
  } catch (error) {
    res.status(400).json({
        success:false,
        message: error.message
    })
  }
}

const delete_e = async (req,res)=>{
  try {

    id = req.params.id

    const new_e = await e_Services.delete_e(id)
    
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

const update_e = async (req,res)=>{
  try {

    id = req.params.e_id
    data = req.body
    const new_e = await e_Services.update_e(id,data)
    
    res.status(200).json({
        success:true,
        message : "update successfully",
        data : new_e
    })
  } catch (error) {
    res.status(400).json({
        success:false,
        message: error.message
    })
  }
}
module.exports = {
    create_e,
    get_e,
    delete_e,
    update_e
}