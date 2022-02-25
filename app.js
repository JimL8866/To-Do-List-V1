import express from "express";
const app = express();

import getDate from "./data.js"

import bodyParser from "body-Parser";
let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
app.get("/", function(req, res) {



  let day = getDate()

  res.render("list", {
    listTitle: day,
    moreTasks: items

  });

});

app.post("/", function(request, response) {
  let item = request.body.newItem;
  if (request.body.list === "Work") {
    workItems.push(item);
    response.redirect("/work");
  } else {
    items.push(item);
    response.redirect("/");
  }

});

app.get("/work", function(req, res) {

  res.render("list", {
    listTitle: "Work",
    moreTasks: workItems
  });

});

app.listen(3000, function() {

  console.log("server is currently running on 3000")
})
