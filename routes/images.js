const express = require("express");
const router = express.Router();

router.get("/",(req,res) => {
  res.json({images:"Up and running."})
})

module.exports = router;