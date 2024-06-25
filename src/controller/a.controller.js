const { a_Services } = require("../services")

const create_a = async (req,res)=>{
  try {

    data = req.body

    const new_a = await a_Services.create_a(data)
    
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

const get_a = async (req,res)=>{
  try {

    data = req.body

    const new_a = await a_Services.get_a(data)
    if(!new_a){
      throw new Error("data not found")
    }
    
    res.status(200).json({
        success:true,
        message : "successfully",
        data : new_a
    })
  } catch (error) {
    res.status(400).json({
        success:false,
        message: error.message
    })
  }
}

const delete_a = async (req,res)=>{
  try {

    id = req.params.id

    const new_a = await a_Services.delete_a(id)
    
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

const update_a = async (req,res)=>{
  try {

    id = req.params.a_id
    data = req.body
    const new_a = await a_Services.update_a(id,data)
    
    res.status(200).json({
        success:true,
        message : "update successfully",
        data : new_a
    })
  } catch (error) {
    res.status(400).json({
        success:false,
        message: error.message
    })
  }
}
module.exports = {
    create_a,
    get_a,
    delete_a,
    update_a
}