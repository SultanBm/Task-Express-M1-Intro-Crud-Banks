const express = require("express");
const accountRoutes = require("./APIs/accounts/account.routes");

const app = express();

//middleware
app.use(express.json());

//Routes
app.use("/api/accounts/", accountRoutes);

const port = 8000;
app.listen(port, () => console.log(`This app is running in localhost ${port}`));
