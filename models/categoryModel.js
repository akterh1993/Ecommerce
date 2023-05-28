const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, "Please enter category name!"],
    },
    image: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
}, {timestamps: true})

categorySchema.index({
    name: 'text'
})

//Export the model
module.exports = mongoose.model("categories", categorySchema);