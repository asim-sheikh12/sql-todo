const connection = require("../../config/connection");
exports.allTask = (req, res) => {
  connection.query("SELECT * from todo", (err, result) => {
    if (err) throw err;
    console.log(result);
    res.status(200).json(result);
  });
};
