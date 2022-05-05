const connection = require("../../config/connection");
exports.updateTask = async (req, res) => {
  const { id } = await req.params;
  const { title, description } = await req.body;
  const update_task = `update todo set title = '${title}',description = '${description}' where id = ${id}`;
  connection.query(update_task, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.status(200).json({
      message: "Task updated successfull",
    });
  });
};
