const express = require("express");
const app = express();
const port = 4000;
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
let corsOption = {
  origin: `http://localhost:${port}`,
};

const db = require("./models/index");
db.sequelize.sync();

const { getAllTasks } = require("./controllers/controllers");

app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/tasks", getAllTasks);
// app.get("/tasks/:id", getTask);
// app.post("/task", postTask);
// app.put("/tasks/:id", updateTask);
// app.delete("/tasks/:id", deleteTask);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
