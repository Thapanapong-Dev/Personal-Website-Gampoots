const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let projectSchema = new Schema(
  {
    name: {
      type: String,
    },
    date: {
      type: String,
    },
    description: {
      type: String,
    },
    tools: {
      type: Array,
    },
    pictureLink: {
      type: Array,
    },
    projectLink: {
      type: String,
    },
    videoLink: {
      type: String,
    },
    priority: {
      type: String,
    },
  },
  {
    collection: "projects",
  }
);

module.exports = mongoose.model("Project", projectSchema);
