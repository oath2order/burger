var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js")

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burger: data
    };
    console.log();
    res.render("index", hbsObject);
  })
});
router.post("/", function(req, res){
  burger.insertOne("burger_name", req.body.burger_name, function(){
    res.redirect("/");
  })
});
router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne(
  condition, function() {
    res.redirect("/");
  });
});
module.exports = router;