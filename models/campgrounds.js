const mongoose = require("mongoose");

const campgroundsSchema = new mongoose.Schema({
 imageId:String,
 name:String,
 description : String,
 title : String
});

module.exports = mongoose.model("campgrounds", campgroundsSchema);

