const express = require("express")
const { d_Controller } = require("../controller")

const router = express.Router()

router.post("/create_d",
    d_Controller.create_d
)
router.get("/list",
    d_Controller.get_d
)
router.delete("/delete/:id",
    d_Controller.delete_d
)
router.put("/update/:d_id",
    d_Controller.update_d
)
module.exports= router