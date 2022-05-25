const mongoose = require("mongoose");
const { Schema } = mongoose;

const accountSchema = new Schema({
  username: String,
  funds: Number,
});

module.exports = mongoose.model("Account", accountSchema);
