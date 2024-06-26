const express = require("express")
const { h_Controller } = require("../controller")

const router = express.Router()

router.post("/create_h",
    h_Controller.create_h
)

router.get("/list",
    h_Controller.get_h
)

router.delete("/delete/:id",
    h_Controller.delete_h
)

router.put("/update/:h_id",
    h_Controller.update_h
)
module.exports = router