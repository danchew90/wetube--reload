import express from "express";
import morgan from "morgan";
import session from "express-session";
import MongoStore from "connect-mongo";
import rootRouter from "./routers/rootRouter";
import viedoRouter from "./routers/videoRouters";
import userRouter from "./routers/userRouters";
import { localsMiddleware } from "./middlewares";

const app = express();
const logger = morgan("dev");

// app.use((req, res, next) => {
//   if (req.url == "/") {
//     return res.end();
//   }
//   next();
// });

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "Hello!",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: "mongodb://127.0.0.1:27017/wetube" }),
  })
);

app.use(localsMiddleware);
app.use("/", rootRouter);
app.use("/videos", viedoRouter);
app.use("/users", userRouter);

export default app;
