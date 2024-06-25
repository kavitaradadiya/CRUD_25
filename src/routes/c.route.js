const express = require("express")
const { c_Controller } = require("../controller")

const router = express.Router()

router.post("/create_c",
    c_Controller.create_c
)
router.get("/list",
    c_Controller.get_c
)
router.delete("/delete/:id",
    c_Controller.delete_c
)
router.put("/update/:c_id",
    c_Controller.update_c
)
module.exports = router