const express = require("express")
const { a_Controller } = require("../controller")

const router = express.Router()

router.post("/create_a",
    a_Controller.create_a
)
router.get("/list",
    a_Controller.get_a
)
router.delete("/delete/:id",
    a_Controller.delete_a
)
router.put("/update/:a_id",
    a_Controller.update_a
)
module.exports= router