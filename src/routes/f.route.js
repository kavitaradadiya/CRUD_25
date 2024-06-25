const express = require("express")
const { f_Controller } = require("../controller")

const router = express.Router()

router.post("/create_f",
    f_Controller.create_f
)
router.get("/list",
    f_Controller.get_f
)
router.delete("/delete/:id",
    f_Controller.delete_f
)
router.put("/update/:f_id",
    f_Controller.update_f
)
module.exports= router