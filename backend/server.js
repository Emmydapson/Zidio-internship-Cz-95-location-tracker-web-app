const dotenv = require("dotenv");
dotenv.config({
  path: "./config.env",
});
const mongoose = require("mongoose");

process.on("uncaughtException", (err) => {
  console.log(err, err.name);
  console.log("Uncaught exception 💥, Shutting down!");
  process.exit(1);
});

const DB = process.env.DB_CONN_STR;
mongoose
  .connect(DB)
  .then(() => console.log("Connected to database"))
  .catch((err) => console.error(err));

const app = require("./app");
const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

process.on("unhandledRejection", (err) => {
  console.log(err, err.name);
  console.log("Unhandled rejection 💥, Shutting down!");
  server.close(() => {
    process.exit(1);
  });
});
