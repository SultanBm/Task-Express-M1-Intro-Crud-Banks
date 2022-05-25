const express = require("express");
const router = express.Router();

const { fetchAccount } = require("./accounts.controllers");
// const { createAccount } = require("./accounts.controllers");
// const { updateAccount } = require("./accounts.controllers");
// const { deleteAccount } = require("./accounts.controllers");

router.get("/", fetchAccount);
// router.post("/", createAccount);
// router.put("/:accountId", updateAccount);
// router.delete("/:accountId", deleteAccount);

module.exports = router;

//   const { accountId } = req.params;
//   const account = data.find((e) => e.id === +accountId);
//   data.push(req.body);
//   res.json(data);
