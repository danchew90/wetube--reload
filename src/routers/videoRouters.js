import express from "express" ; 
import {watch,edit} from "../controllers/videoController";


 const viedoRouter = express.Router(); 



 viedoRouter.get("/watch",watch);
 viedoRouter.get("/edit",edit);

export default viedoRouter;