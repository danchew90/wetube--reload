import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouters";
import viedoRouter from "./routers/videoRouters";
import userRouter from "./routers/userRouters";

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use("/", globalRouter);
app.use("/videos", viedoRouter);
app.use("/users", userRouter);

const home = (req, res) => {
  console.log("I will respond.");
  return res.send("Hello");
};

const login = (req, res) => {
  return res.send("login");
};

export default app;
