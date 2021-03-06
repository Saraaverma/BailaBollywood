const express = require('express');
const router = express.Router();
const cacheData = require('../middleware/cacheData');

router.get("/equipo",(req,res) => {
    res.render("../views/team.ejs");
  });
  
  router.get("/danzas-folkloricas-de-India", (req,res) => {
    res.render("../views/image-map-code.ejs");
  });
  
  router.get("/rajasthan", cacheData.memoryCacheUse(36000),(req,res) => {
    res.render("../views/states/rajasthan.ejs")
  });
  router.get("/maharashtra", cacheData.memoryCacheUse(36000),(req,res) => {
    res.render("../views/states/maharashtra.ejs")
  });
  
  router.get("/kashmir", cacheData.memoryCacheUse(36000),(req,res) => {
    res.render("../views/states/kashmir.ejs")
  });
  
  router.get("/gujrat", cacheData.memoryCacheUse(36000),(req,res) => {
    res.render("../views/states/gujrat.ejs")
  });
  router.get("/punjab", cacheData.memoryCacheUse(36000),(req,res) => {
    res.render("../views/states/punjab.ejs")
  });
  router.get("/orissa", cacheData.memoryCacheUse(36000),(req,res) => {
    res.render("../views/states/orissa.ejs")
  });
  
  module.exports=router;