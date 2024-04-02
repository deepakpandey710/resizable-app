const { add, update, getDetail } = require("../controller/UserController");

const router= require("express").Router();
router.post("/add", add);
router.put("/update", update);
router.get("/detail", getDetail);

module.exports=router;