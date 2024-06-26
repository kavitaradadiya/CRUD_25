const express = require("express")
const aRoute = require("./a.route")
const bRoute = require("./b.route")
const cRoute = require("./c.route")
const dRoute = require("./d.route")
const eRoute = require("./e.route")
const fRoute = require("./f.route")
const gRoute = require("./g.route")
const hRoute = require("./h.route")




const router = express()
router.use("/a",aRoute)
router.use("/b",bRoute)
router.use("/c",cRoute)
router.use("/d",dRoute)
router.use("/e",eRoute)
router.use("/f",fRoute)
router.use("/g",gRoute)
router.use("/h",hRoute)



module.exports = router

