const express = require("express");
require("./src/config/connection");
const app = express();
const router = require("./src/routes");
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(router);
app.listen(3000, () => {
  console.log("Server is running at port 3000");
});
