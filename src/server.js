import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouters";
import userRouter from "./routers/userRouters";
import viedoRouter from "./routers/videoRouters";

const PORT = 4000;

const app = express();
const logger = morgan("dev");
app.use(logger);

app.use("/", globalRouter);
app.use("/videos",viedoRouter);
app.use("/users",userRouter);

const home = (req, res) => {
  console.log("I will respond.");
  return res.send("Hello");
};

const login = (req, res) => {
  return res.send("login");
};

const handleListening = () =>
  console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
