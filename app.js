const express = require("express");
//Routs
const accountRoutes = require("./APIs/accounts/account.routes");

// DB
const connectDB = require("./Database/connection");

const app = express();

//middleware
app.use(express.json());

//Routes
app.use("/api/accounts/", accountRoutes);

connectDB();

const port = 8000;
app.listen(port, () => console.log(`This app is running in localhost ${port}`));
