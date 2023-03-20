const router = require("express").Router();
const todoCntr = require("../controller/todo");
router.get("/", todoCntr.getAll);
router.get("/:id", todoCntr.getOne);
router.post("/add", todoCntr.add);
router.post("/update/:id", todoCntr.update);
router.post("/delete/:id", todoCntr.delete);
module.exports = router;
