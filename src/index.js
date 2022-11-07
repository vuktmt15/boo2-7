const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const dotenv = require("dotenv");
const db = require("./db/connect.js");
const userRoute = require("./router/UserRouter.js");
const ErrorHandler = require("./middleware/errorHandle");

dotenv.config({ path: "./.env" });
app.use(methodOverride("_method"));

db.connect();

app.use("/", express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use(userRoute);
app.use(ErrorHandler);

app.listen(process.env.PORT, () => {
  console.log("Listen on port: http://localhost:" + process.env.PORT);
});
