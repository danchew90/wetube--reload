import express from "express" ; 

 const viedoRouter = express.Router(); 

 const handleWatchVideo = (req,res) => res.send("Watch Video");

 viedoRouter.get("/watch",handleWatchVideo);

export default viedoRouter;