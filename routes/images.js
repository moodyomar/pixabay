const express = require("express");
const router = express.Router();
const axios = require('axios');

router.get("/",(req,res) => {
  try {
  let perPage = (req.query.pp) ? Number(req.query.pp) : 9;
  let page = (req.query.p) ? Number(req.query.p) : 1;
  let category = req.query.cat ? req.query.cat : 'places';
  const apikey = '17357236-aeda27ac71ed0d74e165db2a8';
  axios.get(`https://pixabay.com/api/?key=${apikey}&category=${category}&page=${page}&per_page=${perPage}`)
  .then(response => {
    res.json(response.data.hits)
  })
  .catch(error => {
    console.log(error);
  });
  } catch (error) {
    console.log(err)
    res.status(400).json(err)
  }
})

module.exports = router;