const path = require("path");

const express = require("express");
const DB_PATH =
  "mongodb+srv://root:root@cluster0.yef6no0.mongodb.net/airbnb?retryWrites=true&w=majority&appName=Cluster0";

const storeRouter = require("./routes/storeRouter");
const hostRouter = require("./routes/hostRouter");

const rootDir = require("./utils/pathUtil");
const errorsController = require("./Controllers/errors");
const { default: mongoose } = require("mongoose");
const { authRouter } = require("./routes/authRouter");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

const app = express();


const store = new MongoDBStore({
  uri: DB_PATH,
  collection: "sessions",
});
app.use(express.urlencoded());

app.use(
  session({
    secret: "Knowledge AI with Complete",
    resave: false,
    saveUninitialized: true,
    store: store,
  })
);

app.use((req, res, next) => {
  req, (session.isLoggedIn = req.session.isLoggedIn);
  next();
});

app.use(authRouter);
app.use(storeRouter);
app.use("/host", (req, res, next) => {
  if ((req, session.isLoggedIn)) {
    next();
  } else {
    res.redirect("/login");
  }
});
app.use("/host", hostRouter);

app.use(express.static(path.join(rootDir, "public")));

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
