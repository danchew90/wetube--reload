import express from "express";
import morgan from "morgan";
import session from "express-session";
import rootRouter from "./routers/rootRouter";
import viedoRouter from "./routers/videoRouters";
import userRouter from "./routers/userRouters";

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
    resave: true,
    saveUninitialized: true,
  })
);
app.use((req, res, next) => {
  req.sessionStore.all((error, sessions) => {
    console.log(sessions);
    next();
  });
});

app.get("/add-one", (req, res, next) => {
  req.session.potato += 1;
  return res.send(`${req.session.id} ${req.session.potato}`);
});

app.use("/", rootRouter);
app.use("/videos", viedoRouter);
app.use("/users", userRouter);

export default app;
