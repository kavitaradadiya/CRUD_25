const { b_Services } = require("../services")

const create_b = async (req,res)=>{
  try {

    data = req.body

    const new_b = await b_Services.create_b(data)
    
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

const get_b = async (req,res)=>{
  try {

    data = req.body

    const new_b = await b_Services.get_b(data)
    if(!new_b){
      throw new Error("data not found")
    }
    
    res.status(200).json({
        success:true,
        message : "successfully",
        data : new_b
    })
  } catch (error) {
    res.status(400).json({
        success:false,
        message: error.message
    })
  }
}

const delete_b = async (req,res)=>{
  try {

    id = req.params.id

    const new_b = await b_Services.delete_b(id)
    
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

const update_b = async (req,res)=>{
  try {

    id = req.params.b_id
    data = req.body
    const new_b = await b_Services.update_b(id,data)
    
    res.status(200).json({
        success:true,
        message : "update successfully",
        data : new_b
    })
  } catch (error) {
    res.status(400).json({
        success:false,
        message: error.message
    })
  }
}
module.exports = {
    create_b,
    get_b,
    delete_b,
    update_b
}