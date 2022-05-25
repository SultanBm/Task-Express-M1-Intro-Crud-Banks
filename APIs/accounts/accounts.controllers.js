let accounts = require("../../accounts");

exports.fetchAccount = (req, res) => {
  res.json(accounts);
};

exports.createAccount = (req, res) => {
  const id = accounts.length + 1;
  req.body.id = id;
  accounts.push(req.body);
  res.status(201).json(req.body);
};

exports.updateAccount = (req, res) => {
  const { accountId } = req.params;
  const account = accounts.find((e) => e.id === +accountId);
  if (account) {
    for (const key in req.body) {
      account[key] = req.body[key];
    }
    res.json(account);
  } else {
    res.status(404).json({ messege: "account doesn't exist " });
  }
};
exports.deleteAccount = (req, res) => {
  const { accountId } = req.params;
  const account = accounts.find((e) => e.id === +accountId);
  if (account) {
    account = accounts.filter((e) => e.id !== +req.params.accountId);
    res.json(account);
    res.status(204).end();
  } else {
    res.status(404).json({ messege: "account doesn't exist " });
  }
};
