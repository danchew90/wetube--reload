import express from "express";
import morgan from "morgan";


const PORT = 4000;

const app = express();
const logger = morgan("dev");
app.use(logger);

const globalRouter = express.Router();

const handleHome = (req, res)=>res.send("Home");

globalRouter.get("/",handleHome);

const userRouter = express.Router();

const handleEditUser = (req,res) => res.send("Edit User")

userRouter.get("/edit", handleEditUser);

const viedoRouter = express.Router(); 

const handleWatchVideo = (req,res) => res.send("Watch Video");

viedoRouter.get("/watch",handleWatchVideo);


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
