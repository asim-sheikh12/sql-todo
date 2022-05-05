const connection = require("../../config/connection");
exports.deleteTask = (req, res) => {
  const { id } = req.params;
  const delete_task = `delete from todo where id=${id}`;
  connection.query(delete_task, (err, result) => {
    if (err){ 
        throw err} ;
    console.log(result);
    res.status(200).json({
      message: "Task deleted successfull",
    });
  });
};
