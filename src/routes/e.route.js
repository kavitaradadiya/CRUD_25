const express = require("express")
const { e_Controller } = require("../controller")

const router = express.Router()

router.post("/create_e",
    e_Controller.create_e
)
router.get("/list",
    e_Controller.get_e
)
router.delete("/delete/:id",
    e_Controller.delete_e
)
router.put("/update/:e_id",
    e_Controller.update_e
)
module.exports= router