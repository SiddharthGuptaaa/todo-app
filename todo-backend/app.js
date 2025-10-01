const path = require("path");

const express = require("express");
const DB_PATH =
  "mongodb+srv://root:root@cluster0.yef6no0.mongodb.net/todo?retryWrites=true&w=majority&appName=Cluster0";

const cors = require("cors");

const rootDir = require("./utils/pathUtil");
const errorsController = require("./Controllers/errors");
const { default: mongoose } = require("mongoose");
const session = require("express-session");
const todoItemsRouter = require("./routes/todoItemsRouter");
const MongoDBStore = require("connect-mongodb-session")(session);

const app = express();


const store = new MongoDBStore({
  uri: DB_PATH,
  collection: "sessions",
});
app.use(express.urlencoded());

app.use(express.static(path.join(rootDir, "public")));
app.use(express.json());
app.use(cors());

app.use("/api/todo", todoItemsRouter);

app.use(errorsController.pageNotFound);

const PORT = 3000;

mongoose
  .connect(DB_PATH)
  .then(() => {
    console.log("Connected To MongoDB");
    app.listen(PORT, () => {
      console.log(`Server running on address http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error while connecting to mongo", err);
  });
