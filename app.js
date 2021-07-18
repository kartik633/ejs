const express  = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine","ejs");

app.get("/",function(req,res){

  var today = new Date();
  var day = "";

  if(today.getDay() == 6 || today.getDay() == 0)
  {
    day = "weekend";
    if(today.getDay() == 6)
    {
      day = "Saturday";
    }
    if(today.getDay() == 0)
    {
      day = "Sunday";
    }


    // res.send("it's a weekend");

  }
  else
  {
    day = "weekday";
    if(today.getDay() == 1)
    {
      day = "Monday";
    }
    if(today.getDay() == 2)
    {
      day = "Tuesday";
    }
    if(today.getDay() == 3)
    {
      day = "Wednesday";
    }
    if(today.getDay() == 4)
    {
      day = "Thursday";
    }
    if(today.getDay() == 5)
    {
      day = "Friday";
    }
    // console.log(today.getDate());
    // res.send("We have to work");
  }
  res.render("list", {kindofday: day});

});

app.listen(3000,function(){
  console.log("Server starting on port 3000");
});
