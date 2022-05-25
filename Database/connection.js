const mongoose = require("mongoose");

const connectDB = async () => {
  const connect = await mongoose.connect(
    "mongodb+srv://admin:admin@cluster0.l8a7vfr.mongodb.net/?retryWrites=true&w=majority",
    { useUnifiedTopology: true, useNewUrlParser: true }
  );
  console.log(` You are Connected: ${connect.connection.host}`);
};
module.exports = connectDB;
