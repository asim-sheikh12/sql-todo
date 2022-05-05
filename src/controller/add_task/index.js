const connection = require("../../config/connection");
exports.addTask = (req, res) => {
  const {title,description} = req.body
  const task = `insert into todo(title,description) values (?)`;
  const values = [title,description]
  connection.query(task,[values], (err, result) => {
    if (err) throw err;
    console.log(result);
    return res.status(200).json({
        "message":"Task created successfull"
    });
  });
};
