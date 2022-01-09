const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const taskRoute = require("./routes/tasks");
const sequelizedb = require("./db/configDb");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use("/api/tasks", taskRoute);
app.use(notFound);
app.use(errorHandler);

const port = 3000;
const start = async () => {
  sequelizedb
    .sync()
    .then(() => {
      app.listen(port, () => {
        console.log(`Db Connected & Server is listening on Port ${port}`);
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
start();
